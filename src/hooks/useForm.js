import { useState, useEffect } from "react";

const useForm = (validateInputs, setIsSubmitted) => {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(inputValues);
    setErrors(validateInputs(inputValues));
    setIsSubmitting(true);
  };

  // set state of Form Submitted only when there are no errors left
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitted(true);
    }
  }, [errors, setIsSubmitted, isSubmitting]);

  return { inputValues, onChangeHandler, onSubmitHandler, errors };
};

export default useForm;
