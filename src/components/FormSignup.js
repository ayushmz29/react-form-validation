import React from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import validateInputs from "./validateInputs";

const FormSignUpContainer = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1em;
  }

  .form-inputs {
    margin-bottom: 0.5rem;
  }

  .form-inputs p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }

  .form-label {
    display: inline-block;
    font-size: 0.8rem;
    margin-bottom: 6px;
    color: #fff;
  }

  .form-input {
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: none;
  }

  .form-input::placeholder {
    color: #595959;
    font-size: 12px;
  }

  .form-input-btn {
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: linear-gradient(
      90deg,
      rgb(39, 176, 255) 0%,
      rgb(0, 232, 236) 100%
    );
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;
  }

  .form-input-btn:hover {
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgb(39, 143, 255) 0%,
      rgb(12, 99, 250) 100%
    );
    transition: all 0.4s ease-out;
  }

  .form-input-login {
    font-size: 0.8rem;
    margin-top: 10px;
    color: #fff;
    text-align: center;
  }

  .form-input-login a {
    text-decoration: none;
    color: #27cdff;
    font-weight: 600;
  }
`;

const FormSignup = ({ setIsSubmitted }) => {
  // importing from custom-hook
  const { inputValues, onChangeHandler, onSubmitHandler, errors } =
    useForm(validateInputs, setIsSubmitted);

  // console.log(errors);

  return (
    <FormSignUpContainer>
      <h1>Enter your details below to get started !</h1>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="form-input"
            name="username"
            value={inputValues.username}
            onChange={onChangeHandler}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your E-mail"
            className="form-input"
            name="email"
            value={inputValues.email}
            onChange={onChangeHandler}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-input"
            name="password"
            value={inputValues.password}
            onChange={onChangeHandler}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            placeholder="Confirm Password"
            className="form-input"
            name="password2"
            value={inputValues.password2}
            onChange={onChangeHandler}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button type="submit" className="form-input-btn">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/#">here</a>
        </span>
      </form>
    </FormSignUpContainer>
  );
};

export default FormSignup;
