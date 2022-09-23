import { Navigate, Route, Routes } from "react-router-dom"
import { EcommerPage } from "../pages/EcommerPage"

export const EcommerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EcommerPage />}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
