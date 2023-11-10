import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Check from "../components/check";
// import Radio from "../components/radio";
import { InputStepThree } from "./inputStepThree";
import { Button } from "../components/button";

const StepFour = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");

  const handleNameInput = (value) => {
    setNameValue(value);
  };

  useEffect(() => {
    console.log("nameValue:", nameValue);
    if (nameValue) {
      setNameValue(nameValue);
    }
  }, [nameValue]);

  const variants = [
    { id: "1", answerLabel: "Не буди меня" },
    { id: "2", answerLabel: "Освободи меня" },
  ];

  const goToNextPage = () => {
    handleNameInput(nameValue);
    navigate("/step-five");
  };

  return (
    <div>
      <Check />

      {/* <Radio /> */}
      <form>
        <div className="radio">
          {variants.map((elem) => (
            <InputStepThree
              key={elem.id}
              id={elem.id}
              inputType="radio"
              name="order"
              inputLabel={elem.answerLabel}
              onChange={() => setNameValue(elem.id)}
              isChecked={elem.id === nameValue}
            />
          ))}
        </div>
      </form>

      <Button
        onClick={goToNextPage}
        buttonText="На экран 5"
        isDisabled={!nameValue}
      />
    </div>
  );
};

export default StepFour;
