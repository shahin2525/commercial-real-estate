import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthProvider";
import { toast } from "react-toastify";
import { FaEyeSlash, FaRegEye, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  // console.log(error);
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const email = data.email;
    const password = data.password;
    setError("");
    loginUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // <Navigate to="/"></Navigate>;
        toast("user login successfully");
        navigate(location.state ? location.state : "/");

        console.log(user);
      })
      .catch((error) => {
        // const errorMessage = error.message;
        setError(error.message);
        toast(error.message);
        console.log(error);
      });

    reset();
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <Helmet>
        <title>real-estate || Login</title>
      </Helmet>
      <div className="sm:w-3/4 md:w-1/2 mx-auto pt-[90px]">
        {/* <h1 className="text-center">Register page</h1> */}

        {error && <p className="text-2xl text-red-500 font-bold">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label> */}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              min="6"
              max="20"
              pattern="(?=.*[A-Z])(?=.*[a-z]).*"
              required
            />
            <button
              type="button"
              onClick={() => {
                // e.stopPropagation();
                setShowPassword(!showPassword);
              }}
              className="absolute top-[62%] right-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          <div className="form-control mt-6">
            {/* <button className="btn btn-primary">Login</button> */}
            <input className="btn btn-primary" type="submit" />
          </div>
          <p className="text-[18px]">
            do not have an account {}
            <Link
              className="text-bold text-[18px] text-[#ff4800]"
              to="/register"
            >
              Register
            </Link>
          </p>
          <p className="flex items-center justify-center">
            google login
            <button
              type="button"
              //  onClick={handleGoogleLogin}

              onClick={handleGoogleLogin}
            >
              <FaGoogle className="ml-2" />
            </button>
          </p>
          <p className="flex items-center justify-center">
            github login
            <button type="button" onClick={handleGithubLogin}>
              <FaGithub className="ml-2" />
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
