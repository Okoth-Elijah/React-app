import logo from '../assets/images/logo.png'

const Login = () => {
  return (
    <div className="container bg-white login-div " style={{ height: "70vh", borderRadius: "2px" }}>
      <img src={logo} alt="logo" width={100} height={100} style={{ borderRadius: "50%" }} className='image' />
      <div className="row  justify-content-center">
        <div className="col-lg-12">
          <p className='d-flex justify-content-center' style={{ marginBottom: "-3px", marginTop: "5px" }}>Welcome to!</p>
          <h2 className="d-flex justify-content-center" >Article <span className='text-warning'>Avenue</span></h2>
          <form action="*" className="login-form  rounded-3">
            <div className="d-block mb-3" >
              <input type="Email" className="form-control pass mb-3" id="Email" name="email" placeholder="Enter email" required />
              <input type="Password" className="form-control pass" id="Password" name="Password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary  w-100">Login</button>
            <a href="Register" className='d-flex justify-content-center mt-3 gap-3 text-decoration-none '><span className='text-black'>Don't have an account?</span> Register.</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login