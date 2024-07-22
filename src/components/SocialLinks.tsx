import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <>
      <div className="social gap-3  mt-3">
        <div className="d-flex">
          <Link to="#" className="text-decoration-none ">
            <i className="fi fi-rr-social-network"></i>
          </Link>
          <p className="para5">like</p>
        </div>
        <div className="d-flex">
          <Link to="#" className="text-decoration-none">
            <i className="fi fi-rr-share"></i>
          </Link>
          <p className="para5">share</p>
        </div>
        <div className="d-flex">
          <Link to="#" className="text-decoration-none ">
            <i className="fi fi-rr-comment-alt-dots"></i>
          </Link>
          <p className="para5"> comment</p>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
