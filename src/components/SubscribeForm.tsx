const SubscribeForm = () => {
  return (
    <>
      <div
        className=" mb-3  gap-1 d-flex ms-3 "
        style={{ position: "relative" }}
      >
        <input
          type="email"
          className="form-control "
          id="email"
          placeholder="Email"
          required
          style={{ width: "200px", zIndex: "0" }}
        />
        <button
          type="button"
          className="btn btn-warning btn-md"
          style={{ width: "100px" }}
        >
          Subscribe
        </button>
      </div>
      <div className="social-links"></div>
      <div className="mobile d-flex ms-3 gap-2">
        <p className="text-light">Mobile</p>
        <p className="text-white">(+256) 756-278167</p>
      </div>
      <p className="text-light ms-3" style={{ marginTop: "-5px" }}>
        Email : articleavenue@gmail.com
      </p>
    </>
  );
};

export default SubscribeForm;
