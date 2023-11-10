import React from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/heading";
import { Button } from "../components/button";

const StepOne = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/step-two");
  };

  return (
    <div>
      <Heading text="Спектакль окончен" HeadingType="h1" />
      <Heading text="Гаснет свет" HeadingType="h2" />

      <Button
        onClick={goToNextPage}
        // buttonType="button"
        buttonText="На экран 2"
      />
    </div>
  );
};

export default StepOne;