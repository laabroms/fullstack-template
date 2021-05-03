import {
  CONTACT_FORM_FAIL,
  CONTACT_FORM_REQUEST,
  CONTACT_FORM_SUCCESS,
} from "../constants/contactConstants";

export const contactFormSendReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_FORM_REQUEST:
      return { loading: true };
    case CONTACT_FORM_SUCCESS:
      return { loading: false, success: true };
    case CONTACT_FORM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
