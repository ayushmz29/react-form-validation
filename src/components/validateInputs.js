const validateInputs = (inputValues) => {
  let errors = {};

  // if username is empty
  if (!inputValues.username.trim()) {
    errors.username = "Username is required";
  }

  // if email is empty
  if (!inputValues.email.trim()) {
    errors.email = "E-mail is required";
  }

  // if password is empty
  if (!inputValues.password.trim()) {
    errors.password = "Password is required";
  } else if (inputValues.password.length < 6) {
    errors.password = "Password requires atleast 6 characters ";
  }

  // if password doesn't match
  if (inputValues.password !== inputValues.password2) {
    errors.password2 = "Password doesn't match";
  }

  // return error Object
  return errors;
};

export default validateInputs;