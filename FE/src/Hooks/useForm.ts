import React from "react";

const useForm = <T>(initForm: T) => {
  const [form, setForm] = React.useState<T>(initForm);

  const onChangeForm = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      setForm((form) => {
        return {
          ...form,
          [name]: value,
        };
      });
    },
    []
  );
  return {
    form,
    onChangeForm,
  };
};

export { useForm };
