import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const { image, estate_title, description, id } = estate;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{estate_title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={"estate/" + id} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Estate;
