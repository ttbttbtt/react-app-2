import React from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/heading";
import { Button } from "../components/button";

const StepTwo = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/step-three");
  };

  return (
    <div>
      <Heading text="И многоточий больше нет" HeadingType="h3" />
      <Heading text="Останови музыку" HeadingType="h4" />
      <Heading text="Спектакль окончен" HeadingType="h5" />
      <Heading text="Happy end" HeadingType="h6" />

      <Button
        onClick={goToNextPage}
        buttonText="На экран 3"
      />
    </div>
  );
};

export default StepTwo;