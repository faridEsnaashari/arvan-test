import { useReducer } from "react";
import { submitFormReducer, submitFormReducerInitialState } from "@/APIs/reducers/submit-form.reducer";
import { singUpAction } from "@/APIs/actions/submit-form.action";
import { SubmitFormActionData } from "@/APIs/types/actions.type";
import axios from "axios";
import { GENERAL } from "@/configs";

axios.defaults.baseURL = GENERAL.API_URL;

export const useAPICaller = () => {
  const [submitFormResult, submitFormDispatch] = useReducer(submitFormReducer, submitFormReducerInitialState);
  const submitForm = (data: SubmitFormActionData) => singUpAction(submitFormDispatch, data);

  return {
    submitFormCaller: [submitForm, submitFormResult] as const,
  };
};

export default useAPICaller;
