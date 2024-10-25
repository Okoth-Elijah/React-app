// import logo from "../assets/images/logo.png";

const register = () => {
  return (
    <div className="container-fluid  border border-success border-5 ">
      <form className="registration-form px-2">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Username"
            required
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
      </form>
    </div>
  );
};

export default register;
