import { Helmet } from "react-helmet-async";
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
  const {
    image,
    status,
    description,
    price,
    location,
    estate_title,
    facilities,
  } = matchIdData;
  console.log(facilities);

  //   console.log(data, id);

  return (
    <div className="pt-[90px]">
      <Helmet>
        <title>real-estate || View details</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen border-2 border-green-400">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{estate_title}</h1>
            <p className="pt-6">{description}</p>
            <div className="py-3">
              <p>Price:{price}</p>
              <p>Status:{status}</p>
              <p>Location:{location}</p>
              <p>
                Facilities:{facilities[0]} ,{facilities[1]}, {facilities[2]}
              </p>
            </div>
            <button className="btn btn-primary">checked</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailEstate;
