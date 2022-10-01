import { register } from "../../auth/helpers";
import { checkingCreditionals, login } from "../auth/authSlice";

export const startRegisterUser = (data) => {
  return async (dispatch) => {
    dispatch(checkingCreditionals());

    const result = await register(data);

    if (!result.ok) {
      return console.log("hacer algo con el error");
    }
    dispatch(login(result));
  };
};

export const startLoginUser = (data) => {
  return (dispatch) => {
    dispatch(checkingCreditionals());


    
  }
};
