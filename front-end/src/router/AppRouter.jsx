import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { EcommerRouter } from "../ecommer/router/EcommerRouter";

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth);
  
  const isAuthenticated = status; //'checking','not-authenticated','authenticated'"

  if(status === "checking") { 
    return <p>Cargando...</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          isAuthenticated === "authenticated"
          ? <Route path="*" element={<EcommerRouter />}/>
          : <Route path="/auth/*" element={<AuthRouter />}/>  
        }
        <Route path="/*" element={<Navigate to="auth/login"/>}/>        
      </Routes>
    </BrowserRouter>
  );
};
