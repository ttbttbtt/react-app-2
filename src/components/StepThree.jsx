import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Input from "../components/input";
import { InputStepThree } from "./inputStepThree";
import { Button } from "../components/button";

const StepThree = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");

  const handleNameInput = (value) => {
    setNameValue(value);
  };

  const goToNextPage = () => {
    navigate("/step-four");
  };

  return (
    <div>
      {/* <Input /> */}
      <form>
        <InputStepThree
          value={nameValue}
          isRequired
          inputLabel="Не хватает лишь пары слов"
          inputPlaceholder="Напиши их здесь"
          onChange={(value) => handleNameInput(value)}
        />
      </form>

      <Button
        onClick={goToNextPage}
        buttonText="На экран 4"
        isDisabled={!nameValue}
      />
    </div>
  );
};

export default StepThree;
