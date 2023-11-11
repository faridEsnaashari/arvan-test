import { SubmitFormAction } from "@/APIs/types/actions.type";
import { SubmitFormActionTypes } from "@/APIs/types/submit-form.enum";
import { SubmitFormState } from "@/APIs/types/reducers.type";

export const submitFormReducerInitialState: SubmitFormState = {
  isFetching: false,
  statusCode: undefined,
};

export const submitFormReducer = (state: SubmitFormState, action: SubmitFormAction): SubmitFormState => {
  let currentState: SubmitFormState = { ...state };

  switch (action.type) {
    case SubmitFormActionTypes.REQUESTED_SUBMIT_FORM: {
      currentState = {
        isFetching: true,
        statusCode: undefined,
      };
      break;
    }

    case SubmitFormActionTypes.RECIVED_SUBMIT_FORM: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
      };
      break;
    }

    case SubmitFormActionTypes.FAILED_SUBMIT_FORM: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
      };
      break;
    }
  }

  return currentState;
};
