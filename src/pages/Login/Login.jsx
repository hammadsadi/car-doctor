import login from "../../assets/images/login/login.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toastAlert } from "../../Utils/toastAlert";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // Validation
    if (!email || !password) {
      return toastAlert("All Fields Area Required");
    }
    // Login User
    loginUser(email, password)
      .then(() => {
        navigate("/");
        toastAlert("Login Success", "success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:justify-center lg:items-center w-full h-screen lg:gap-10 lg:flex-row">
        <div className="text-center hidden md:flex">
          <img src={login} alt="" className="mx-auto w-full" />
        </div>
        <div className="card-body shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center pt-8 font-bold">Login now</h1>
          <form className="" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered focus:border focus:border-color-primary focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered focus:border focus:border-color-primary focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-color-primary text-white hover:bg-color-primary"
              >
                Login
              </button>
            </div>
          </form>
          <div className="divider px-5">Sign in With</div>
          <div className="flex justify-center gap-3 items-center">
            <img src={google} alt="" className="w-8" />
            <img src={twitter} alt="" className="w-10" />
          </div>
          <div className="text-center">
            <p className="text-sm text-dark-3">
              New Here ?{" "}
              <Link to="/sign-up" className="underline text-color-primary">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
