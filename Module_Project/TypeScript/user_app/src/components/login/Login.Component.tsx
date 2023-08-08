import React from "preact/compat";

const LoginComponent: React.FC = () => {
  return (
    <form 
    // onSubmit={handleClickSubmit}
    >
      <span>Email</span>
      <input
        type="email"
        placeholder="Email"
        name="email"
        // onChange={handleOnchangeInput}
        required
      />
      <span>Mật khẩu</span>
      <input
        type="password"
        placeholder="Password"
        name="password"
        // onChange={handleOnchangeInput}
      />
      {/* <input type="checkbox" />Remember me */}
      <button>ĐĂNG NHẬP</button>
      <span>Bạn chưa có tài khoản?</span>
      {/* <NavLink to={"/auth/register"}> */}
        <b>Đăng ký ngay</b>
      {/* </NavLink> */}
    </form>
  );
};

export default LoginComponent;
