import React from "react";
import styled from "styled-components";

const FormSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100%;

  position: relative;

  h1 {
    color: #ffffff;
    margin: 3em 1em;
  }
  img {
    height: 60%;
    position: absolute;
    bottom: 2em;
  }
  button {
    position: absolute;
    top: 2em;
    right: 1em;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #e26060;
    cursor: pointer;

    &:hover {
      background-color: #f34646;
    }
  }
`;
const FormSuccess = ({ setIsSubmitted }) => {
  const closeBtnHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(false);
  }
  
  return (
    <FormSuccessWrapper>
      <h1>We have received your request!</h1>
      <button onClick={closeBtnHandler}>X</button>
      <img src="img/img-3.svg" alt="success-img" />
    </FormSuccessWrapper>
  );
};

export default FormSuccess;
