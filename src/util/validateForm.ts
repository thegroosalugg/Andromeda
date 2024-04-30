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

function validateEmptyFields(data: FormData) {
  const errors: Partial<FormData> = {};

  Object.keys(data).forEach((key) => {
    const field = key as keyof FormData;
    if (!data[field]?.trim()) {
      errors[field] = `${field.toUpperCase()} EMPTY`;
    }
  });

  return errors;
}

export function validateUser(data: FormData, users: User[]) {
  const errors = validateEmptyFields(data);
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneExp = /^\d+$/;

  const validateField = (field: 'email' | 'phone') => {
    const value = data[field];
    const regex = field === 'email' ? emailExp : phoneExp;

    if (!regex.test(value!)) {
      errors[field] = `${field.toUpperCase()} INVALID`;
    } else if (users.some((user) => user[field] === value)) {
      errors[field] = `${field.toUpperCase()} EXISTS`;
    }
  };

  if (data.email) {
    validateField('email');
  }

  if (data.phone) {
    validateField('phone');
  }

  return errors;
}

export function validateBooking(data: FormData, users: User[], shipId: string) {
  const errors = validateEmptyFields(data);

  if (data.from && data.till) {
    const currentFrom = new Date(data.from);
    const currentTill = new Date(data.till);

    if (currentFrom > currentTill) {
      errors.from = errors.till = 'NO TIME TRAVELLING';
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
              errors.from = errors.till = 'DATES UNAVAILABLE';
            }
          }
        }
      }
    }
  }

  return errors;
}
