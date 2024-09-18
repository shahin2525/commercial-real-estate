import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetailEstate = () => {
  const estates = useLoaderData();
  const params = useParams();
  const idEstate = { params };
  const id = idEstate.params.id;
  const idNumber = parseInt(id);
  const dataIds = estates.map((estate) => estate.id);
  const matchId = dataIds.find((dataId) => dataId === idNumber);
  const matchIdData = estates.find((estate) => estate.id === matchId);
  const { image, status, description, price, location, estate_title } =
    matchIdData;
  console.log(location);

  //   console.log(data, id);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{estate_title}</h1>
          <p className="pt-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="py-3">
            <p>Price:{price}</p>
            <p>Status:{status}</p>
            <p>Location:{location}</p>
          </div>
          <button className="btn btn-primary">checked</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailEstate;
