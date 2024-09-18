import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthProvider";

const UpdateProfile = () => {
  const { user, userUpdateProfile, setLoading } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    userUpdateProfile(data.name, data.photoUrl)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

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
            <span className="label-text">Your name: {user?.displayName}</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="you can change your name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder={user?.email}
            readOnly
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL: {user?.photoURL}</span>
          </label>
          <input
            {...register("photoUrl")}
            type="text"
            placeholder="you can change your url"
            className="input input-bordered"
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

export default UpdateProfile;
