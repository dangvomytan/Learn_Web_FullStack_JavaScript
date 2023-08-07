import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Auth: React.FC = () => {
  return (
    <>
      <h2>Auth</h2>
      <Outlet />
    </>
  );
};

export default Auth;
