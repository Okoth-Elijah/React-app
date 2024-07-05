import Navbar from "../components/navbar";
import Herosection from "../components/herosection";
import Futuredarticles from "../components/futuredarticles";
import Profilepage from "./profilepage";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage" style={{ marginTop: "7em" }}>
        <Herosection />

        <div className="mx-auto px-5 w-100">
          <div className="row background py-2">
            <Futuredarticles />
          </div>
        </div>
        <Profilepage />
      </div>
    </>
  );
};

export default Homepage;
