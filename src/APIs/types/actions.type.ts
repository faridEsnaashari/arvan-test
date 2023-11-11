import { StatusCodes } from "@/tools/status-codes.tool.enum";
import { SubmitFormActionTypes } from "./submit-form.enum";

export type SubmitFormAction = {
  statusCode?: StatusCodes;
  type: SubmitFormActionTypes;
};

export type SubmitFormActionData = {
  company: string;
  company2: string;
  email: string;
  name: string;
  phonenumber: string;
  phonenumber2: string;
  message: string;
};
