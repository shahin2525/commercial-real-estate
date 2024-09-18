import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="w-1/2 mx-auto">
      <Helmet>
        <title>real-estate || update-profile</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name: {user?.displayName}</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email: {user?.email}</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL: {user?.photoURL}</span>
          </label>
          <input
            {...register("photoUrl")}
            type="text"
            placeholder={user?.photoURL}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
