import { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toastAlert } from "../../Utils/toastAlert";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    // Validation
    if (!email || !name || !password) {
      return toastAlert("All Fields Area Required");
    }
    // Register user
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
        });
        toastAlert("User Created Successful", "success");
        e.target.reset();
        navigate("/login");
      })
      .catch((err) => {
        toastAlert(err.message);
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
          <h1 className="text-3xl text-center pt-8 font-bold">Sign Up Now</h1>
          <form className="" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered focus:border focus:border-color-primary focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                placeholder="Password"
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
                Create Account
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-dark-3">
              Already Have an Account?{" "}
              <Link to="/login" className="underline text-color-primary">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
