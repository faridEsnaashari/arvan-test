"use client";

import InputWrapper from "./InputWrapper.component";
import { ChangeEvent, useState, useEffect, useRef } from "react";
import { TextAreaProps } from "./text-area.types";
import { getRandomId } from "@/tools/helpers.helper";

function TextArea({
  className,
  placeholder,
  value,
  onValueChange,
  label,
  description,
  counter,
  onCorrect,
  showError,
  errorText,
  isActive,
}: TextAreaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null!);

  const [typing, setTyping] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [inputId, setInputId] = useState("");

  useEffect(() => setInputId(getRandomId() + ""), []);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    onValueChange(value);

    setCorrect(onCorrect(value));
  };
  const onFocus = () => setTyping(true);
  const onFocusCancelled = () => setTyping(false);
  const crossClicked = () => {
    inputRef.current.focus();
    onValueChange("");
  };
  const onHovered = () => setHovered(true);
  const onHoveredCancelled = () => setHovered(false);

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
      onFocus={onFocus}
      onFocusCancelled={onFocusCancelled}
      typing={typing}
      isTextArea
    >
      <textarea
        className={`absolute h-full w-full resize-none rounded-lg border border-solid border-green-700 bg-input-bg p-4 transition-colors hover:border-green-600 ${
          correct && "!border-2 !border-green-500"
        } ${showError && "!border-2 !border-red-600"} ${isActive && "!border !border-green-900 !text-gray-400"}`}
        ref={inputRef}
        id={inputId}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onFocusCancelled}
        onMouseOver={onHovered}
        onMouseOut={onHoveredCancelled}
      ></textarea>
    </InputWrapper>
  );
}

export default TextArea;
