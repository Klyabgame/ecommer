import { Navigate, Route, Routes } from "react-router-dom"
import { CartPage } from "../pages/CartPage"
import { EcommerPage } from "../pages/EcommerPage"
import { ProfilePage } from "../pages/ProfilePage"

export const EcommerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EcommerPage />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/profile" element={<ProfilePage />}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
