import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // способ 2
import { InputStepThree } from "./inputStepThree";
// import { Button } from "../components/button"; // способ 2
import { LinkButton } from "./LinkButton";

const StepThree = () => {
  // const navigate = useNavigate(); // способ 2

  const [nameValue, setNameValue] = useState("");

  const handleNameInput = (value) => {
    setNameValue(value);
  };

  // способ 2
  // const goToNextPage = () => {
  //   navigate("/step-four");
  // };

  return (
    <div>
      <form>
        <InputStepThree
          value={nameValue}
          isRequired
          inputLabel="Не хватает лишь пары слов"
          inputPlaceholder="Напиши их здесь"
          onChange={(value) => handleNameInput(value)}
        />
      </form>

      {/* // способ 2
        <Button
        onClick={goToNextPage}
        buttonText="На экран 4"
        isDisabled={!nameValue}
      /> */}

      <LinkButton
        path="/step-four"
        buttonText="На экран 4"
        isDisabled={!nameValue}
      />
    </div>
  );
};

export default StepThree;