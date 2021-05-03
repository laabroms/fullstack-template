import Axios from "axios";
import {
  CONTACT_FORM_FAIL,
  CONTACT_FORM_REQUEST,
  CONTACT_FORM_SUCCESS,
} from "../constants/Constants";

export const sendContactForm = (form) => async (dispatch) => {
  dispatch({ type: CONTACT_FORM_REQUEST });
  try {
    const { data } = await Axios.post("/api/contact", { form });
    dispatch({ type: CONTACT_FORM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONTACT_FORM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
