import { useEffect, useState } from "react";
import Estate from "./Estate";

const EstateContainer = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("estate.json")
      .then((data) => data.json())
      .then((data) => setEstates(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-2 sm:mx-auto sm:text-center">
      {estates.map((estate) => (
        <Estate key={estate.id} estate={estate}></Estate>
      ))}
    </div>
  );
};

export default EstateContainer;
