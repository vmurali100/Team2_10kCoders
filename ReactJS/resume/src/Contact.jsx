import axios from "axios";
import React, { useEffect, useState } from "react";

export const Contact = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/contact").then(({ data }) => {
      setContactData(data);
    });
  }, []);
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
            {contactData.map((e) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <a
                    className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                    href="#!"
                  >
                    <i className="fas fa-map-marker-alt fa-2x mb-4"></i>

                    <h4 className="contact-item-title h5 text-uppercase">
                      {e.content}
                    </h4>
                    <p className="text-sm mb-0">{e.data}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};