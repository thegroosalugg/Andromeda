interface FormData {
  name?: string;
  surname?: string;
  email?: string;
  tel?: string;
  datefrom?: string;
  datetill?: string;
  destination?: string;
}

const validateForm = (data: FormData) => {
  const errors: Partial<FormData> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telRegex = /^\d+$/;

  Object.keys(data).forEach((key) => {
    const field = key as keyof FormData;
    if (!data[field]) {
      errors[field] = 'Empty field';
    } else if (key === 'email' && !emailRegex.test(data[key] as string)) {
      errors[key] = 'Invalid email';
    } else if (key === 'tel' && !telRegex.test(data[key] as string)) {
      errors[key] = 'Invalid phone';
    }
  });

  return errors;
};

export default validateForm;
