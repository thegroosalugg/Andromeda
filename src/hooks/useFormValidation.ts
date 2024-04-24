import { useState } from 'react';

interface FormData {
         name?: string;
      surname?: string;
        email?: string;
        phone?: string;
         from?: string;
         till?: string;
  destination?: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneExp = /^\d+$/;

  const validate = (data: FormData) => {
    const newErrors: Partial<FormData> = {};
    Object.keys(data).forEach((key) => {
      const field = key as keyof FormData;
      if (!data[field]?.trim()) {
        newErrors[field] = `${[key]} empty`.toUpperCase();
      } else if (key === 'email' && !emailExp.test(data[key]!)) {
        newErrors[key] = 'EMAIL INVALID';
      } else if (key === 'phone' && !phoneExp.test(data[key]!)) {
        newErrors[key] = 'PHONE INVALID';
      }
    });

    if (new Date(data.from!) > new Date(data.till!)) {
      newErrors.till = newErrors.from = 'No TimeTravelling';
    }

    setErrors(newErrors);
  };

  return { errors, validate };
}
