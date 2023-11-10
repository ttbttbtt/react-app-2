import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputStepThree } from "./inputStepThree";
import { Button } from "../components/button";

const StepFour = () => {
  const navigate = useNavigate();

  const [checkValueOne, setcheckValueOne] = useState(false);
  const [checkValueTwo, setcheckValueTwo] = useState(false);
  const [nameValue, setNameValue] = useState("");

  //check1
  const handlecheckValueOne = (value) => {
    setcheckValueOne(value);
    console.log("handlecheckValueOne:", checkValueOne);
  };

  //check2
  const handlecheckValueTwo = (value) => {
    setcheckValueTwo(value);
    console.log("handlecheckValueTwo:", checkValueTwo);
  };

  //radio
  const handleNameInput = (value) => {
    setNameValue(value);
  };



  //check1
  useEffect(() => {
    if (checkValueOne.isChecked) {
      setcheckValueOne(true);
      console.log("checkValueOne is:", checkValueOne);
    } else {
      setcheckValueOne(false);
      console.log("checkValueOne no:", checkValueOne);
    }
  }, [checkValueOne]);

  //check2
  useEffect(() => {
    if (checkValueTwo.isChecked) {
      setcheckValueTwo(true);
      console.log("checkValueTwo:", checkValueTwo);
    } else {
      setcheckValueTwo(false);
      console.log("checkValueTwo: ПУСТО");
    }
  }, [checkValueTwo]);

  //radio
  useEffect(() => {
    console.log("nameValue:", nameValue);
    if (nameValue) {
      setNameValue(nameValue);
    }
  }, [nameValue]);



  //radio
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
      <form>
        <div className="please">

          <InputStepThree
            value={checkValueOne}
            isRequired
            inputLabel="Посиди со мной"
            onChange={(value) => handlecheckValueOne(value)}
            // onChange={() => setcheckValueOne()}
            inputType="checkbox"
            />
          <InputStepThree
            value={checkValueTwo}
            isRequired
            inputLabel="Поговори со мной"
            onChange={(value) => handlecheckValueTwo(value)}
            // onChange={() => setcheckValueTwo()}
            inputType="checkbox"
          />
        </div>

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