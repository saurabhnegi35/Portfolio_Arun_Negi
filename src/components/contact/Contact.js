import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-image"></div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          <p className="para">
            Thank you for getting in touch. Please use the form below to share
            your message with me.
          </p>

          <div className="container">
            <div class="row">
              <div class="col-lg-6 ">
                <div class="row">
                  <div class="col-lg-12 col-md-6 mb">
                    <div class="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="First Name :"
                        className="form-control border rounded "
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6 mb">
                    <div class="form-group">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Your email :"
                        className="form-control border rounded"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input
                        name="subject"
                        id="subject"
                        placeholder="Your subject :"
                        className="form-control border rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <textarea
                    name="comments"
                    id="comments"
                    rows="7"
                    placeholder="Your Message :"
                    className="form-control border rounded"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="col-sm-12 text-right">
              <input
                type="submit"
                id="submit"
                name="send"
                value="Send Message"
                className="submitBnt btn btn-success"
              />
              <div id="simple-msg"></div>
            </div>
            {/* <div
              data-sitekey="6LfN1rwbAAAAAFh6qcbo6GdUBXXEpmdLclbzo3z3"
              class="g-recaptcha"
            >
              <div style="width: 304px; height: 78px;">
                <div>
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfN1rwbAAAAAFh6qcbo6GdUBXXEpmdLclbzo3z3&amp;co=aHR0cHM6Ly9qZ2FicmllbC5ldTo0NDM.&amp;hl=en&amp;v=4PnKmGB9wRHh1i04o7YUICeI&amp;size=normal&amp;cb=dnipj3hl1uo3"
                    role="presentation"
                    name="a-tcnxwgcn1bo7"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                    width="304"
                    height="78"
                    frameborder="0"
                  ></iframe>
                </div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  class="g-recaptcha-response"
                  style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
                ></textarea>
              </div>
              <iframe style="display: none;"></iframe>
            </div> */}
            {/* <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  State
                </label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Zip
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
