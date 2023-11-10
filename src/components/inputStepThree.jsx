import React from "react";

export const InputStepThree = ({
  name,
  isRequired,
  inputType,
  inputPlaceholder,
  value,
  inputLabel,
  onChange,
}) => {
  return (
    <form>
      <label>
        {inputLabel}
        <input
          required={isRequired}
          type={inputType ?? "text"}
          name={name}
          placeholder={inputPlaceholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </form>
  );
};
