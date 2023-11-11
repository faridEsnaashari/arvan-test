import { StatusCodes } from "@/tools/status-codes.tool.enum";

export type SubmitFormState = {
  isFetching: boolean;
  statusCode?: StatusCodes;
};
