import React from "react";
import { useNavigate } from "react-router-dom";
// import { Heading } from "../components/heading";
import Check from "../components/check";
import Radio from "../components/radio";
import { Button } from "../components/button";

const StepFour = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/step-five");
  };

  return (
    <div>
      <Check />
      <Radio />
      <Button
        onClick={goToNextPage}
        // buttonType="button"
        buttonText="На экран 5"
      />
    </div>
  );
};
export default StepFour;