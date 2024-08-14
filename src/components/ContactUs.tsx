const ContactUs = () => {
  return (
    <section className="vvvv pt-3 mt-5">
      <div className="heading-container mt-5">
        <h5 className="contact-heading fs-2 text-center">Get in Touch</h5>
        <p
          className="text-center text-light text-wrap "
          style={{
            width: "50em",
            margin: "0 auto",
          }}
        >
          Need assistance or have questions? Our “Get in Touch” section offers
          ways to connect with us. Whether you're seeking support, have
          inquiries, or want to share feedback, we're here to help. We value
          your input and will respond as soon as possible.
        </p>
      </div>
      <div className="contact-body py-5 px-5 mt-5 ">
        <div
          className="col contact-content  d-flex justify-content-between "
          style={{ position: "static" }}
        >
          <div
            className="content-1 d-flex flex-column bg-white  card-2 justify-content-center rounded-1  my-3"
            style={{ width: "20em", height: "25em" }}
          >
            <div className="contact-icon mb-5">
              <i className="fi fi-ss-circle-phone-hangup fs-1 d-flex justify-content-center"></i>
            </div>
            <h6 className=" text-center p1 fs-4">Call Us Now</h6>
            <p className=" text-center fs-6 mx-3">
              Need help? Call us now for quick and friendly support. Our team is
              ready to assist with any questions or concerns you have. We're
              here to ensure you get the best service!
            </p>
          </div>
          <div
            className="content-1 d-flex flex-column card-2 bg-white justify-content-center rounded-1  my-3"
            style={{ width: "20em", height: "25em" }}
          >
            <div className="contact-icon mb-5">
              <i className="fi fi-ss-envelopes fs-1 d-flex justify-content-center"></i>
            </div>
            <h6 className=" text-center p1 fs-4">Email Adress</h6>
            <p className=" text-center fs-6 mx-3">
              Have questions or need support? Email us at [
              <em>articleavenue@gmail.com</em>]. Our team is ready to assist
              with any inquiries or concerns. We look forward to hearing from
              you!
            </p>
          </div>
          <div
            className="content-1 d-flex flex-column card-2 bg-white justify-content-center rounded-1  my-3"
            style={{ width: "20em", height: "25em" }}
          >
            <div className="contact-icon mb-5">
              <i className="fi fi-sr-land-layer-location fs-1 d-flex justify-content-center"></i>
            </div>
            <h6 className=" text-center p1 fs-4">Location</h6>
            <p className=" text-center fs-6 mx-3">
              Need help? Call us now for quick and friendly support. Our team is
              ready to assist with any questions or concerns you have. We're
              here to ensure you get the best service!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
