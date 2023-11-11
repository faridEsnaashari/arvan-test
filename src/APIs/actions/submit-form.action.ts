import { SubmitFormAction, SubmitFormActionData } from "@/APIs/types/actions.type";
import { SubmitFormActionTypes } from "@/APIs/types/submit-form.enum";
import axios from "axios";
import { Dispatch } from "react";

export const singUpAction = (dispatch: Dispatch<SubmitFormAction>, data: SubmitFormActionData) => {
  dispatch({ type: SubmitFormActionTypes.REQUESTED_SUBMIT_FORM });

  axios
    .post("/url", data)
    .then((response) => {
      dispatch({
        type: SubmitFormActionTypes.RECIVED_SUBMIT_FORM,
        statusCode: response.status,
      });
    })
    .catch((error) => {
      dispatch({
        type: SubmitFormActionTypes.FAILED_SUBMIT_FORM,
        statusCode: error?.response.status,
      });
    });
};
