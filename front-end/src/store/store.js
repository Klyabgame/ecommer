import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { ecommerSlice } from "./ecommer/ecommerSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecommer: ecommerSlice.reducer,
  },
});
