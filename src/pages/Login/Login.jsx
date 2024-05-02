import login from "../../assets/images/login/login.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:justify-center lg:items-center w-full h-screen lg:gap-10 lg:flex-row">
        <div className="text-center">
          <img src={login} alt="" className="mx-auto w-full" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center pt-8 font-bold">Login now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                className="input input-bordered focus:border focus:border-color-primary focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-color-primary text-white hover:bg-color-primary">
                Login
              </button>
            </div>
          </form>
          <div className="divider px-5">Sign in With</div>
          <div className="flex justify-center gap-3 items-center pb-4">
            <img src={google} alt="" className="w-8" />
            <img src={twitter} alt="" className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
