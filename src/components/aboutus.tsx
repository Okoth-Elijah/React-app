import Accordion from "./accordion";

const Aboutus = () => {
  return (
    <div
      style={{
        width: "100wh",
        height: "100vh",
        display: "flex",
        boxSizing: "border-box",
        border: "2px solid red",
        justifyContent: "center",
        alignItems: "center",
        background: "red",
        position: "relative",
      }}
    >
      <Accordion />
    </div>
  );
};

export default Aboutus;
