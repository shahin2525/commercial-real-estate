import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    console.log(email, password);
    reset();
  };
  return (
    <div className="sm:w-3/4 md:w-1/2 mx-auto">
      <h1 className="text-center">Register page</h1>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("Name")} />
        <label>Photo-url</label>
        <input {...register("Photo-url")} />
        <label>Email</label>
        <input {...register("Email")} />
        <label>Password</label>
        <input {...register("Password")} />

        <input type="submit" />
      </form> */}
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
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label> */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-URL</span>
          </label>
          <input
            {...register("photo-URL")}
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
      </form>
    </div>
  );
};

export default Register;
