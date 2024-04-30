import User from '@/models/User';

interface FormData {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  from?: string;
  till?: string;
  pickup?: string;
  dropoff?: string;
}

export function validateCredentials(
  field: keyof FormData,
  data: FormData,
  users: User[]
): string | undefined {
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneExp = /^\d+$/;

  const value = data[field];
  const regex = field === 'email' ? emailExp : phoneExp;

  if (!regex.test(value!)) {
    return `${field.toUpperCase()} INVALID`;
  } else if (users.some((user) => user[field as 'email' | 'phone'] === value)) {
    return `${field.toUpperCase()} EXISTS`;
  }
}

export function validateForm(data: FormData, users: User[], shipId: string) {
  const errors: Partial<FormData> = {};

  Object.keys(data).forEach((key) => {
    const field = key as keyof FormData;

    if (!data[field]?.trim()) {
      errors[field] = `${[key]} empty`.toUpperCase();
    } else if (field === 'from' || field === 'till') {
      if (data.from && data.till) {
        const currentFrom = new Date(data.from);
        const currentTill = new Date(data.till);

        if (currentFrom > currentTill) {
          errors.till = errors.from = 'NO TIME TRAVELLING';
        } else {
          users.forEach((user) => {
            user.bookings.forEach((booking) => {
              if (booking.shipId === shipId) {
                const bookedFrom = new Date(booking.from);
                const bookedTill = new Date(booking.till);

                if (
                  (currentFrom >= bookedFrom && currentFrom <= bookedTill) ||
                  (currentTill >= bookedFrom && currentTill <= bookedTill) ||
                  (currentFrom <= bookedFrom && currentTill >= bookedTill)
                ) {
                  errors.from = errors.till = 'DATES UNAVAILABLE';
                }
              }
            });
          });
        }
      }
    } else if (field === 'email' || field === 'phone') {
      errors[field] = validateCredentials(field, data, users);
    }
  });

  return errors;
}
