import logo from '../assets/images/logo.png'

const Login = () => {
  return (
    <div className="container bg-white " style={{ height: "70vh", borderRadius: "2px" }}>
      <img src={logo} alt="logo" width={100} height={100} style={{ borderRadius: "50%" }} className='image' />
      <div className="row  justify-content-center">
        <div className="col-lg-12">
          <h2 className="d-flex justify-content-center" >Article Avenue</h2>
          <form action="*" className="login-form border border-secondary rounded-3">
            <div className="d-block mb-3" >
              <input type="Email" className="form-control pass mb-3" id="Email" name="email" placeholder="Input email" required />
              <input type="Password" className="form-control pass" id="Password" name="Password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <a href="Register" className='d-flex justify-content-center mt-3 gap-3 text-decoration-none '><span className='text-black'>Don't have an account?</span> Register.</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login