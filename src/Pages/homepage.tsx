import Navbar from "../components/navbar";
import Herosection from "../components/herosection";
import Categories from "./categories";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage" style={{ marginTop: "7em" }}>
        <Herosection />

        <div className="mx-auto px-5 w-100">
          <div className="row background py-2">
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
