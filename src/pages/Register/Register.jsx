import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthProvider";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // console.log(error);
  const {
    createUser,

    userUpdateProfile,
  } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    setError("");
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toast("user created successfully");
        console.log(user);
        userUpdateProfile(data.name, data.photoUrl)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((error) => {
        // const errorMessage = error.message;
        setError(error.message);
        console.log(error);
      });

    reset();
  };
  return (
    <>
      <Helmet>
        <title>real-estate || Register</title>
      </Helmet>
      <div className="sm:w-3/4 md:w-1/2 mx-auto pt-[90px]">
        {/* <h1 className="text-center">Register page</h1> */}

        {error && <p className="text-2xl text-red-500 font-bold">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[62%] right-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input
              {...register("photoUrl")}
              type="text"
              placeholder="Photo-URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            {/* <button className="btn btn-primary">Login</button> */}
            <input className="btn btn-primary" type="submit" />
          </div>
          <p className="text-[18px]">
            already have an account{" "}
            <Link className="text-bold text-[18px] text-[#ff4800]" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
