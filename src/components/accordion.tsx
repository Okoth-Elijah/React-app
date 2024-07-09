const Accordion = () => {
  return (
    <div className="accordion " id="accordionExample ">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Mission of Article Avenue:
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className="mission-statement" style={{ fontWeight: "300" }}>
              Article Avenue is dedicated to enriching lives through insightful,
              diverse content that informs, inspires, and fosters a vibrant
              community of learning. We aim to be a trusted source of expert
              knowledge across various topics, promoting curiosity, critical
              thinking, and lifelong learning.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Purpose of Article Avenue:
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className="our-purpose" style={{ fontWeight: "300" }}>
              The purpose of Article Avenue is to empower individuals with
              knowledge that enhances personal growth and understanding of the
              world. By delivering well-researched articles and diverse
              perspectives, we strive to spark meaningful conversations, bridge
              gaps in understanding, and inspire readers to explore new ideas
              and gain deeper insights into their interests and the broader
              society.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Story
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="our-story" style={{ fontWeight: "300" }}>
                Welcome to Article Avenue, a hub where knowledge meets
                inspiration. Our journey began in 2023 with a simple yet
                profound vision: to create a platform that brings together
                diverse voices and expert insights to enrich lives and foster a
                community of learning. Our founders, Mr Elija, Mr Brevin and Mr
                Dansan driven by a passion for sharing knowledge, started
                Article Avenue as a small project with a handful of enthusiastic
                writers. Today, it has grown into a thriving community of
                readers and contributors dedicated to delivering
                well-researched, engaging content across a wide range of
                topics—from technology and science to culture and current
                affairs. At Article Avenue, we believe in the transformative
                power of knowledge. Our dedicated team works tirelessly to bring
                you articles that inform, inspire, and challenge your thinking.
                We are committed to presenting balanced perspectives, fostering
                critical thinking, and encouraging open dialogue. Our core
                values of integrity, inclusivity, and excellence guide
                everything we do. We aim to bridge gaps, build understanding,
                and promote lifelong learning. Our vibrant community of readers
                is at the heart of our mission, continually inspiring us to
                evolve and improve. Join us on this journey of discovery and
                inspiration. Welcome to Article Avenue—where every article is a
                step towards a more informed and inspired you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
