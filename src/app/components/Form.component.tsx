"use client";

import { Button, TextArea, TextField } from "@/common/components/forms";
import {
  formButtonText,
  textAreaLabel,
  textAreaPlaceholder,
  textFieldLabel1,
  textFieldLabel2,
  textFieldLabel3,
  textFieldLabel4,
  textFieldLabel5,
  textFieldLabel6,
  textFieldPlaceholder1,
  textFieldPlaceholder2,
  textFieldPlaceholder3,
  textFieldPlaceholder4,
  textFieldPlaceholder5,
  textFieldPlaceholder6,
} from "../texts";
import { useState } from "react";
import { isEmptyString, isValidEmail, isValidName, isValidPhoneNumber } from "@/tools/helpers.helper";
import { ArrowIcon } from "@/common/components/svg-icons";

function Form() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [company2, setCompany2] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [phonenumber2, setPhonenumber2] = useState("");
  const [message, setMessage] = useState("");

  const onClick = () => {};

  return (
    <>
      <div className="flex flex-wrap gap-[2.5%] gap-y-6">
        <TextField
          className="w-1/2.05"
          label={textFieldLabel1}
          placeholder={textFieldPlaceholder1}
          value={name}
          onValueChange={(value) => setName(value)}
          onCorrect={(value) => isValidName(value)}
        />
        <TextField
          className="w-1/2.05"
          label={textFieldLabel2}
          placeholder={textFieldPlaceholder2}
          value={email}
          onValueChange={(value) => setEmail(value)}
          onCorrect={(value) => isValidEmail(value)}
        />
        <TextField
          className="w-1/2.05"
          label={textFieldLabel3}
          placeholder={textFieldPlaceholder3}
          value={phonenumber}
          onValueChange={(value) => setPhonenumber(value)}
          onCorrect={(value) => isValidPhoneNumber(value)}
        />
        <TextField
          className="w-1/2.05"
          label={textFieldLabel4}
          placeholder={textFieldPlaceholder4}
          value={company}
          onValueChange={(value) => setCompany(value)}
          onCorrect={(value) => isEmptyString(value)}
        />
        <TextField
          className="w-1/2.05"
          label={textFieldLabel5}
          placeholder={textFieldPlaceholder5}
          value={phonenumber2}
          onValueChange={(value) => setPhonenumber2(value)}
          onCorrect={(value) => isValidPhoneNumber(value)}
        />
        <TextField
          className="w-1/2.05"
          label={textFieldLabel6}
          placeholder={textFieldPlaceholder6}
          value={company2}
          onValueChange={(value) => setCompany2(value)}
          onCorrect={(value) => isEmptyString(value)}
          description="dklsfjdskjflskjfklsdjflkjklsdjfklsj"
        />
        <TextArea
          className="h-32 w-full"
          label={textAreaLabel}
          placeholder={textAreaPlaceholder}
          value={message}
          onValueChange={(value) => setMessage(value)}
          onCorrect={(value) => isEmptyString(value)}
          description="dklsfjdskjflskjfklsdjflkjklsdjfklsj"
        />
      </div>
      <div></div>
      <div className="flex justify-end">
        <Button className="coursor-pointer mt-12 flex rounded bg-green-400 px-5 py-3 text-gray-900" onClick={onClick}>
          <span className="ml-2 text-sm leading-4">{formButtonText}</span>
          <div className="h-4 w-4">
            <ArrowIcon />
          </div>
        </Button>
      </div>
    </>
  );
}

export default Form;
