"use client";

import { InputWrapperProps } from "./input-wrapper.types";
import { CrossIcon, WarningIcon } from "../../svg-icons";

function InputWrapper({
  placeholder,
  value,
  description,
  label,
  counter,
  errorText,
  showError,
  isActive,
  className,
  children,
  hovered,
  crossClicked,
  onHovered,
  onHoveredCancelled,
  inputId,
  onFocus,
  onFocusCancelled,
  typing,
  isTextArea,
}: InputWrapperProps) {
  return (
    <div className={`flex flex-col gap-2 !leading-4 text-white ${isActive && "!text-gray-300"} ${className}`}>
      <div className="flex justify-between">
        <span className="block w-full px-2 text-sm">{label}</span>
        <span
          className={`block w-full px-2 text-left text-xs opacity-0 transition-opacity ${hovered && "!opacity-100"}`}
        >
          {counter}
        </span>
      </div>
      <div className={`relative w-full text-[.8125rem] ${isTextArea ? "h-full" : "h-12"}`}>
        {children}
        {value === "" && (
          <label
            className={`absolute right-4 top-4 cursor-text text-green-700 ${isActive && "!text-gray-400"}`}
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
          } ${isActive && "!text-gray-500"}`}
        >
          {description}
        </span>
      )}
      {showError && errorText && (
        <div className={`relative pl-2 pr-7 text-red-500 ${isActive && "!text-gray-500"}`}>
          <WarningIcon />
          <span className="block w-full break-words text-xs">{errorText}</span>
        </div>
      )}
    </div>
  );
}

export default InputWrapper;
