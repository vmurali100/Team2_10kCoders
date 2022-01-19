import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="pt-5">
        <div className="container text-center py-5">
          <div className="row px-4">
            <div className="col-lg-7 mx-auto">
              <h2 className="text-uppercase mb-0">Jason Doe </h2>
              <h6 className="text-primary text-uppercase mb-0 letter-spacing-3">
                Front End Web Developer
              </h6>
              <p className="text-muted my-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="social-link" href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-link" href="#!">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-link" href="#!">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-link" href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyrights px-4">
          <div className="container py-4 border-top text-center">
            <p className="mb-0 text-muted py-2">
              &copy; All rights reserved. Template designed by{" "}
              <a href="https://bootstrapious.com/p/bootstrap-resume">
                Bootstrapious
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
