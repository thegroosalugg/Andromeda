interface FormData {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  from?: string;
  till?: string;
  destination?: string;
}

const validateForm = (data: FormData) => {
  const errors: Partial<FormData> = {};
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telExp = /^\d+$/;

  Object.keys(data).forEach((key) => {
    const field = key as keyof FormData;
    if (!data[field]?.trim()) {
      errors[field] = `${[key]} empty`;
    } else if (key === 'email' && !emailExp.test(data[key]!)) {
      errors[key] = 'Invalid email';
    } else if (key === 'phone' && !telExp.test(data[key]!)) {
      errors[key] = 'Invalid phone';
    }
  });

  if (new Date(data.from!) > new Date(data.till!)) {
    errors.till = errors.from = 'No TimeTravelling';
  }

  return errors;
};

export default validateForm;
