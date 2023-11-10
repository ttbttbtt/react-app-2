import React from "react";
import { useNavigate } from "react-router-dom";
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
        buttonText="На экран 4"
      />
    </div>
  );
};

export default StepThree;