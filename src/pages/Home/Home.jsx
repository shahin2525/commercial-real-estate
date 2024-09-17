import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import EstateContainer from "./EstateContainer";

const Home = () => {
  return (
    <div className="pt-[50px] ">
      <Helmet>
        <title>real-estate || home</title>
      </Helmet>
      <Banner></Banner>
      <EstateContainer></EstateContainer>
    </div>
  );
};

export default Home;
