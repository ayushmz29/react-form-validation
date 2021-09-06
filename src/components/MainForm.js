import React, { useState } from "react";
import FormSignup from "./FormSignup";
import styled from "styled-components";
import FormSuccess from "./FormSuccess";

const FormMainContainer = styled.div`
  width: 70%;
  min-width: 700px;
  height: 520px;

  display: flex;
  justify-content: center;
  align-items: center;

  .form-left {
    height: 100%;
    width: 50%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px 0 0 10px;
    background: linear-gradient(
      90deg,
      rgb(39, 176, 255) 0%,
      rgb(0, 232, 236) 100%
    );
  }
  .form-right {
    /* border: 3px magenta solid; */
    height: 100%;
    width: 50%;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0 10px 10px 0;
    position: relative;
    background: linear-gradient(
      90deg,
      rgb(40, 40, 40) 0%,
      rgb(17, 17, 17) 100%
    );
  }

  img {
    position: absolute;
    /* margin: 0 auto; */
    height: 90%;
    width: 90%;
  }
`;

const MainForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <FormMainContainer>
      <div className="form-left">
        <img src="img/img-2.svg" alt="spaceship" />
      </div>
      <div className="form-right">
        {!isSubmitted ? (
          <FormSignup setIsSubmitted={setIsSubmitted} />
        ) : (
          <FormSuccess setIsSubmitted={setIsSubmitted} />
        )}
      </div>
    </FormMainContainer>
  );
};

export default MainForm;
