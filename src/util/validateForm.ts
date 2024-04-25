interface FormData {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  from?: Date | string;
  till?: Date | string;
  destination?: string;
}

export function validateForm(data: FormData) {
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneExp = /^\d+$/;
  const errors: Partial<FormData> = {};

  Object.keys(data).forEach((key) => {
    const field = key as keyof FormData;

    if (!data[field]) {
      errors[field] = `${[key]} empty`.toUpperCase();

    } else if (field === 'from' || field === 'till') {
      if (data.from && data.till && data.from > data.till) {
        errors.till = errors.from = 'No TimeTravelling';
      }

    } else if (!data[field]?.trim()) {
      errors[field] = `${[key]} empty`.toUpperCase();

    } else if (key === 'email' && !emailExp.test(data[key]!)) {
      errors[key] = 'EMAIL INVALID';

    } else if (key === 'phone' && !phoneExp.test(data[key]!)) {
      errors[key] = 'PHONE INVALID';
    }
  });

  return errors;
}
