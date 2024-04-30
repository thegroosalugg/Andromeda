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

export function validateForm(data: FormData, users: User[], shipId: string) {
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneExp = /^\d+$/;
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

    } else if (key === 'email' && !emailExp.test(data[key]!)) {
      errors[key] = 'EMAIL INVALID';

    } else if (key === 'phone' && !phoneExp.test(data[key]!)) {
      errors[key] = 'PHONE INVALID';
    }
  });

  return errors;
}
