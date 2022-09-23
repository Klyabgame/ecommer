import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { EcommerRouter } from "../ecommer/router/EcommerRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />}/>
        <Route path="*" element={<EcommerRouter />}/>

      </Routes>
    </BrowserRouter>
  );
};
