import React from "react";

export const Contact = () => {
  return (
    <div>
      <section className="bg-light py-5" id="contact">
        <div className="container py-5">
          <header className="mb-5 pb-4">
            <p className="fw-bold text-primary text-uppercase letter-spacing-3">
              Call me, maybe.
            </p>
            <h2 className="text-uppercase lined">Contact</h2>
          </header>
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <a
                className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                href="#!"
              >
                <i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                <h4 className="contact-item-title h5 text-uppercase">
                  Location
                </h4>
                <p className="text-sm mb-0">Portland, Oregon</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                href="tel:534456886"
              >
                <i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                <h4 className="contact-item-title h5 text-uppercase">Phone</h4>
                <p className="text-sm mb-0">534 456 886</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                href="www.example.com"
              >
                <i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                <h4 className="contact-item-title h5 text-uppercase">
                  Website
                </h4>
                <p className="text-sm mb-0">www.example.com</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                href="mailto:info@example.com"
              >
                <i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                <h4 className="contact-item-title h5 text-uppercase">Email</h4>
                <p className="text-sm mb-0">info@example.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
