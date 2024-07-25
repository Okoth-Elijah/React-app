import biotechnology from "../assets/images/biotechnology.jpeg";
import coffee from "../assets/images/coffee.jpeg";

const Content = () => {
  return (
    <>
      <div className="d-flex justify-content-between ">
        <h5>Allcategories</h5>
        <h5>News</h5>
        <h5>Personal Advice</h5>
        <h5>Self-Development</h5>
        <h5>Travel</h5>
        <h5>Funny situations</h5>
        <h5>Natural</h5>
      </div>
      <section className="border mb-5 mt-5 d-flex gap-3">
        <aside style={{ width: "50%", height: "110vh" }}>
          <img
            src={biotechnology}
            alt="img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </aside>
        <aside
          className=" px-2 py-2"
          style={{ width: "20%", height: "100vh", position: "relative" }}
        >
          <img
            className="image-fluid rounded-2 mb-3"
            src={coffee}
            alt="img"
            style={{ position: "relative", width: "100%", height: "35%" }}
          />
          <img
            className="image-fluid rounded-2 mb-3"
            src={coffee}
            alt="img"
            style={{ position: "relative", width: "100%", height: "35%" }}
          />
          <img
            className="image-fluid rounded-2 mb-3"
            src={coffee}
            alt="img"
            style={{ position: "relative", width: "100%", height: "35%" }}
          />
        </aside>
        <aside
          className="border border-danger"
          style={{ width: "30%", height: "110vh" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam
          architecto assumenda voluptatum quis veniam minus qui maxime eius
          doloremque sed omnis est quae atque nesciunt eveniet voluptates unde
          iusto enim soluta quam, eum ex! Harum, non maxime, cum esse aperiam
          labore, quae explicabo iure consequuntur necessitatibus minima
          corporis facilis.
        </aside>
      </section>
    </>
  );
};

export default Content;
