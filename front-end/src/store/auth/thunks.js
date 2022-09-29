import { register } from "../../auth/helpers";
import { checkingCreditionals, login } from "../auth/authSlice";

export const startRegisterUser = (form) => {
  return async (dispatch) => {
    dispatch(checkingCreditionals());

    const result = await register(form);

    if (!result.ok) {
      return console.log("hacer algo con el error");
    }
    dispatch(login(result));
    console.log(result);
  };
};
