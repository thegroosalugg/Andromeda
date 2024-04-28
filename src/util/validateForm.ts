interface FormData {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  from?: string;
  till?: string;
  destination?: string;
}

export function validateForm(data: FormData) {
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneExp = /^\d+$/;
  const errors: Partial<FormData> = {};

  Object.keys(data).forEach((key) => {
    const field = key as keyof FormData;

    if (!data[field]?.trim()) {
      errors[field] = `${[key]} empty`.toUpperCase();

    } else if (field === 'from' || field === 'till') {
      if (data.from && data.till && new Date(data.from) > new Date(data.till)) {
        errors.till = errors.from = 'NO TIME TRAVELLING';
      }

    } else if (key === 'email' && !emailExp.test(data[key]!)) {
      errors[key] = 'EMAIL INVALID';

    } else if (key === 'phone' && !phoneExp.test(data[key]!)) {
      errors[key] = 'PHONE INVALID';
    }
  });

  return errors;
}
