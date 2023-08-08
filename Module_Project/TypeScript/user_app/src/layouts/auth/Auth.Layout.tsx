import { Outlet } from "react-router-dom";
import "./Auth.Layout.css";
import { image } from "../../assets/image";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <>
          <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
      <div className="Auth_backgroud">
        <img src={image.BackgroundAuth} />
      </div>
      
      <div className="Auth_body">
        <div className="Main_Container">
          <div className="box_position">
            <div className="form_conten">
              <div className="box_text">{/* <h1> Welcome !</h1> */}</div>
              <div className="box_form">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
