import React from 'react';

export const Header = (props) => {

    return (<div>

        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">AP New Districts Project</span>
                </a>


                <ul className="nav nav-pills">
                    <li className="nav-item"><a className="nav-link active" id="home" aria-current="page" >Home</a></li>
                </ul>

            </header>
        </div>
    </div>);
};
