import logo from '../assets/images/logo.png'



const forgotpassword = () => {
  return (
    <div className="container-fluid bg-white px-3 py-3" style={{
      position: "relative",
      width: "70vh", height: "70vh", flexDirection: "column"
    }}>
      <div className="row justify-content-center">
        <div className="col-lg-12 d-flex" style={{ flexDirection: "column" }}>
          <img src={logo} alt="logo" width={100} height={100} style={{ borderRadius: "50%", marginLeft: "35%" }} className='image1 mb-3 ' />
          <form action="" className="border border-3 border-secondary px-3 py-3">
            <p className="para text-center">Recover password!</p>
            <p className="para-1"></p>
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="floatingInput" placeholder="PhoneNumber" required />
              <label htmlFor="floatingInput">Enter emailadress</label>
            </div>
            <div className="submit-button">
              <button type='submit' className="btn btn-primary me">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default forgotpassword