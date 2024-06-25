import logo from '../assets/images/logo.png'


const register = () => {
  return (
    <div className="container bg-white" style={{ height: "90vh", borderRadius: "2px" }}>
      <img src={logo} alt="logo" width={100} height={100} style={{ borderRadius: "50%" }} className='image' />
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <h2 className="register-title  ">Article Avenue</h2>
          <form action="" className=" border border-gray border-3 p-3" style={{ width: "500px" }}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Username" required />
              <label htmlFor="floatingInput">UserName</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="input-email" required />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="floatingInput" placeholder="PhoneNumber" required />
              <label htmlFor="floatingInput">PhoneNumber</label>
            </div>
            <div className="form-row  password-aline">
              <div className="form-floating mb-3 col-sm-6">
                <input type="Password" className="form-control" id="floatingPassword" placeholder="Password" required />
                <label htmlFor="floatingInput">Password</label>
              </div>
              <div className="form-floating mb-3 col-sm-6" >
                <input type="email" className="form-control" id="floatingPassword" placeholder="Password" required />
                <label htmlFor="floatingInput">Confirm-Password</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-md ms-3">Submit</button>
            <a href="*" className='d-flex justify-content-center mt-3 gap-3 text-decoration-none  '><span className='text-black have-account'>Already have an account?</span> Login</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default register