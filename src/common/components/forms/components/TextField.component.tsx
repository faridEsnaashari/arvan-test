"use client";

import { ChangeEvent, useState, useEffect, useRef } from "react";
import { TextFieldProps } from "./text-field.types";
import { CrossIcon, WarningIcon } from "../../svg-icons";
import { getRandomId } from "@/tools/helpers.helper";

function TextField({
  placeholder,
  value,
  onValueChange,
  label,
  description,
  counter,
  onCorrect,
  showError,
  errorText,
  inActive,
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null!);

  const [typing, setTyping] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [inputId, setInputId] = useState<number>();

  useEffect(() => setInputId(getRandomId()), []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
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
    <div className={`flex flex-col gap-2 !leading-4 text-white ${inActive && "!text-gray-300"}`}>
      <div className="flex justify-between">
        <span className="block w-full px-2 text-sm">{label}</span>
        <span
          className={`block w-full px-2 text-left text-xs opacity-0 transition-opacity ${hovered && "!opacity-100"}`}
        >
          {counter}
        </span>
      </div>
      <div className="relative h-12 w-full text-[.8125rem]" onChange={onChange}>
        <input
          className={`absolute w-full rounded-lg border border-solid border-green-700 bg-input-bg p-4 transition-colors hover:border-green-600 ${
            correct && "!border-2 !border-green-500"
          } ${showError && "!border-2 !border-red-600"} ${inActive && "!border !border-green-900 !text-gray-400"}`}
          ref={inputRef}
          id={inputId + ""}
          type="text"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onFocusCancelled}
          onMouseOver={onHovered}
          onMouseOut={onHoveredCancelled}
        ></input>
        {value === "" && (
          <label
            className={`absolute right-4 top-4 cursor-text text-green-700 ${inActive && "!text-gray-400"}`}
            htmlFor={inputId + ""}
            onMouseOver={onHovered}
            onMouseOut={onHoveredCancelled}
          >
            {placeholder}
          </label>
        )}
        <button
          className={`absolute left-2 top-2 mr-2 h-9 w-9 cursor-pointer p-2 text-gray-300 opacity-100 ${
            showError && "text-gray-700"
          } ${!typing && "!cursor-text !opacity-0"}`}
          onClick={crossClicked}
          onFocus={onFocus}
          onBlur={onFocusCancelled}
          onMouseOver={onHovered}
          onMouseOut={onHoveredCancelled}
        >
          <CrossIcon />
        </button>
      </div>
      {description && (
        <span
          className={`block max-h-0 w-full overflow-hidden break-words px-2 text-xs text-gray-200 transition-max-h ${
            (hovered || typing) && "!max-h-24"
          } ${inActive && "!text-gray-500"}`}
        >
          {description}
        </span>
      )}
      {showError && errorText && (
        <div className={`relative pl-2 pr-7 text-red-500 ${inActive && "!text-gray-500"}`}>
          <WarningIcon />
          <span className="block w-full break-words text-xs">{errorText}</span>
        </div>
      )}
    </div>
  );
}

export default TextField;
