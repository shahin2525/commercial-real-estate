import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="pt-[50px] ">
      <Helmet>
        <title>real-estate || home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
