import React from "react";

export const Slider = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center py-5"
        id="hero"
        style={{background:"url(./img/author.jpg)"}}
      >
        <div className="container py-5 my-5 z-index-20 position-relative">
          <div className="row py-lg-5 mt-5">
            <div className="col-md-8 text-white">
              <h2 className="h4 text-primary fw-normal mb-0">Hi, I am</h2>
              <h1 className="text-uppercase text-xl mb-0">
                Jason <span className="text-primary">Doe</span>
              </h1>
              <h2 className="h4 fw-normal mb-5">Front End Web Developer</h2>
              <p className="text-shadow">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
