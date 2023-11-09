import React from "react";
import { useNavigate } from "react-router-dom";
// import { Heading } from "../components/heading";
import Input from "../components/input";
import { Button } from "../components/button";

const StepThree = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/step-four");
  };

  return (
    <div>
      <Input />
      <Button
        onClick={goToNextPage}
        // buttonType="button"
        buttonText="На экран 4"
      />
    </div>
  );
};
export default StepThree;
