import React from "preact/compat";
const RegisterComponent:React.FC = () => {
  return (
    <div>
            <form 
            // onSubmit={handleClickSubmit}
            >
        <span>Tên</span>
        <input
          type="text"
          placeholder="Tên"
          name="firstName"
          // onChange={handleOnchangeInput}
          required
        />
        <span>Họ</span>
        <input
          type="text"
          placeholder="Họ"
          name="lastName"
          // onChange={handleOnchangeInput}
          required
        />
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
          required
        />
        {/* <input type="checkbox" /> */}
        {/* <label>I agree the Term and Condition </label> */}
        <button type="submit">ĐĂNG KÝ</button>
        <span>Đã có tài khoản rồi ?</span>
        {/* <NavLink to={"/auth/login"}> */}
        <b>Đăng nhập</b>
        {/* </NavLink> */}
      </form>
    </div>
  )
}

export default RegisterComponent