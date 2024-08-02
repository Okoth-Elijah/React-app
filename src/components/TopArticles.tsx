import unfolded from "../assets/images/unfloded_.jpeg";
import newh from "../assets/images/newh.jpeg";
import workshift from "../assets/images/workshift.jpeg";
import eco from "../assets/images/eco.jpeg";

const TopArticles = () => {
  return (
    <section className="mb-5">
      <div className="top-container">
        <h4 className="title text-center text-white">Top Stories</h4>
        <p
          className="text-content text-center text-light move-paragraph"
          style={{ letterSpacing: "1px" }}
        >
          Dive into our Top Stories for the latest and most captivating
          articles. Explore the content that's making waves and resonating with
          readers like you!
        </p>
      </div>
      <div className="col d-flex top-content floating gap-3 ">
        <div
          className="story-content bg-white  d-flex flex-column justify-content-center rounded-1 "
          style={{ width: "27%", position: "relative" }}
        >
          <img
            className="img-fluid img-thumbnail tech-2 mb-2 mx-auto"
            src={unfolded}
            alt="image"
            style={{
              width: "18em",
              height: "20em",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="d-flex flex-column  ">
            <h4 className="text-center futured-title">Future Unfolded</h4>
            <p className="text-center mx-3">
              Explore the latest trends and innovations shaping our future.
              Discover breakthroughs, insights, and advancements.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary rounded-1 w-50 mb-2 "
              style={{ marginLeft: "23%" }}
            >
              Explore Now
            </button>
          </div>
        </div>
        <div
          className="story-content bg-white  d-flex flex-column justify-content-center rounded-1 "
          style={{ width: "27%", position: "relative" }}
        >
          <img
            className="img-fluid img-thumbnail mb-2 mx-auto "
            src={eco}
            alt="image"
            style={{
              width: "18em",
              height: "20em",
              objectFit: "cover",
              objectPosition: "center",
              marginTop: "25px",
            }}
          />
          <div className="d-flex flex-column  ">
            <h4 className="text-center futured-title">Eco Edge</h4>
            <p className="text-center mx-3">
              Explore top eco-friendly innovations and sustainability tips that
              make a real impact.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary rounded-1 w-50 mb-2 "
              style={{ marginLeft: "23%" }}
            >
              Explore Now
            </button>
          </div>
        </div>
        <div
          className="story-content bg-white  d-flex flex-column justify-content-center rounded-1 "
          style={{ width: "27%", position: "relative" }}
        >
          <img
            className="img-fluid img-thumbnail mb-2 mx-auto "
            src={workshift}
            alt="image"
            style={{
              width: "18em",
              height: "20em",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="d-flex flex-column  ">
            <h4 className="text-center futured-title">Workplace Shift</h4>
            <p className="text-center mx-3">
              Dive into the shift as remote and hybrid models redefine
              workspaces. Adapt to the evolving landscape of modern work.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary rounded-1 w-50 mb-2 "
              style={{ marginLeft: "23%" }}
            >
              Explore Now
            </button>
          </div>
        </div>
        <div
          className="story-content bg-white  d-flex flex-column justify-content-center rounded-1 "
          style={{ width: "27%", position: "relative" }}
        >
          <img
            className="img-fluid img-thumbnail mb-2 mx-auto "
            src={newh}
            alt="image"
            style={{
              width: "18em",
              height: "20em",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="d-flex flex-column   ">
            <h4 className="text-center futured-title">New Horizons</h4>
            <p className="text-center mx-3">
              Unveil emerging trends and innovations that are setting new
              standards. See how they're shaping a brighter future.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary rounded-1 w-50 mb-2 "
              style={{ marginLeft: "23%" }}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopArticles;
