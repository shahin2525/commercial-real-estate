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
  const { image, status, description, price, location } = matchIdData;
  console.log(location);

  //   console.log(data, id);

  return (
    <div>
      <h1>view details estate</h1>
    </div>
  );
};

export default ViewDetailEstate;
