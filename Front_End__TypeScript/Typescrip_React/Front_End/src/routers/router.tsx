import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../layouts/auth/Auth";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NotFound from "../pages/notFound/notFound";

type Props = {};

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default Router;
