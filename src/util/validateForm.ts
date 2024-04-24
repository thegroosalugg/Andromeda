interface FormData {
  name?: string;
  surname?: string;
  email?: string;
  tel?: number;
  datefrom?: Date;
  datetill?: Date;
  destination?: string;
}

const validateForm = (data: FormData) => {
  const errors: Partial<FormData> = {};

  return errors;
};

export default validateForm;
