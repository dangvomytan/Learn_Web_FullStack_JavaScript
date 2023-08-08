import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/auth/Auth.Layout";
import RegisterComponent from "../components/register/Register.Component";
import LoginComponent from "../components/login/Login.Component";
import NotFoundPage from "../pages/notFound/NotFound.Page";


const Router = () => {
  return (
    <Routes>
     <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<LoginComponent/>} />
          <Route path="register" element={<RegisterComponent/>} />
     </Route>
    < Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}

export default Router