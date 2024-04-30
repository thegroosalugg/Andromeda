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
    return `${field} INVALID`.toUpperCase();
  } else if (users.some((user) => user[field as 'email' | 'phone'] === value)) {
    return `${field} EXISTS`.toUpperCase();
  }
}

export function validateDates(data: FormData, users: User[], shipId: string) {
  if (data.from && data.till) {
    const currentFrom = new Date(data.from);
    const currentTill = new Date(data.till);

    if (currentFrom > currentTill) {
      return 'NO TIME TRAVELLING';
    } else {
      for (const user of users) {
        for (const booking of user.bookings) {
          if (booking.shipId === shipId) {
            const bookedFrom = new Date(booking.from);
            const bookedTill = new Date(booking.till);

            if (
              (currentFrom >= bookedFrom && currentFrom <= bookedTill) ||
              (currentTill >= bookedFrom && currentTill <= bookedTill) ||
              (currentFrom <= bookedFrom && currentTill >= bookedTill)
            ) {
              return 'DATES UNAVAILABLE';
            }
          }
        }
      }
    }
  }
}

export function validateForm(data: FormData, users: User[], shipId: string) {
  const errors: Partial<FormData> = {};

  Object.keys(data).forEach((key) => {
    const field = key as keyof FormData;
    if (!data[field]?.trim()) {
      errors[field] = `${[key]} empty`.toUpperCase();
    } else if (field === 'from' || field === 'till') {
      const dateError = validateDates(data, users, shipId);
      if (dateError) {
        errors[field] = dateError;
      }
    } else if (field === 'email' || field === 'phone') {
      const credentialError = validateCredentials(field, data, users);
      if (credentialError) {
        errors[field] = credentialError;
      }
    }
  });

  return errors;
}
