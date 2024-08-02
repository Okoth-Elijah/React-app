import Navbar from "../components/navbar";
import Herosection from "../components/herosection";
import TrendingContent from "../components/TrendingContent";
import Content from "../components/Content";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage" style={{ marginTop: "7em" }}>
        <Herosection />

        <div className="mx-auto px-5 ">
          <div className="row background py-2"></div>
          <TrendingContent />
          <Content />
        </div>
      </div>
    </>
  );
};

export default Homepage;
