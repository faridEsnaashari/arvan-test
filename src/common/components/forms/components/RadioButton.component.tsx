"use client";

import { ChangeEvent, useState, useEffect, useRef } from "react";
import InputWrapper from "./InputWrapper.component";
import { RadioButtonProps } from "./radio-button.types";
import { getRandomId } from "@/tools/helpers.helper";

function RadioButton({
  className,
  placeholder,
  value,
  onValueChange,
  label,
  description,
  counter,
  showError,
  errorText,
  isActive,
  name,
  options,
}: RadioButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null!);

  const [openOptions, setOpenOptions] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inputId, setInputId] = useState("");

  useEffect(() => setInputId(getRandomId() + ""), []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    onValueChange(value);
    setOpenOptions(false);
  };
  const onFocusCancelled = () => !hovered && setOpenOptions(false);
  const crossClicked = () => {
    inputRef.current.focus();
    onValueChange("");
  };
  const onHovered = () => setHovered(true);
  const onHoveredCancelled = () => setHovered(false);
  const onClick = () => setOpenOptions(true);

  return (
    <InputWrapper
      inputId={inputId}
      onHovered={onHovered}
      onHoveredCancelled={onHoveredCancelled}
      crossClicked={crossClicked}
      isActive={isActive}
      errorText={errorText}
      showError={showError}
      counter={counter}
      description={description}
      label={label}
      value={value}
      hovered={hovered}
      className={className}
      placeholder={placeholder}
      onFocus={() => {}}
      onFocusCancelled={onFocusCancelled}
    >
      <input
        className={`absolute h-12 w-full rounded-lg border border-solid border-green-700 bg-input-radio-bg p-4 transition-colors hover:border-green-600 ${
          showError && "!border-2 !border-red-600"
        } ${isActive && "!border !border-green-900 !text-gray-400"}`}
        ref={inputRef}
        id={inputId}
        type="text"
        value={value}
        onBlur={onFocusCancelled}
        onMouseOver={onHovered}
        onMouseOut={onHoveredCancelled}
        onClick={onClick}
      ></input>
      <div
        className={`absolute top-14 z-50 hidden w-full flex-col rounded-lg ${openOptions && "!block"}`}
        onMouseOver={onHovered}
        onMouseOut={onHoveredCancelled}
      >
        {options.map((option, index) => (
          <>
            <input
              className="hidden"
              key={index}
              id={index + ""}
              type="radio"
              name={name}
              value={option}
              onChange={onChange}
              checked={value === option}
            ></input>
            <label
              className="flex h-10 w-full justify-between bg-input-radio-bg p-3 text-green-400 hover:bg-input-radio-bghover hover:text-white"
              htmlFor={index + ""}
            >
              <span>{option}</span>
              <svg
                className={value === option ? "fill-white" : ""}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="currentcolor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </>
        ))}
      </div>
    </InputWrapper>
  );
}

export default RadioButton;
