import React from "react";

import { Link } from "react-router-dom";
export const Header = () => {
   
    return <div>
        <header className="header">
            <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="navbar">
                <div className="container"><a className="navbar-brand" href="index.html"></a>
     
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link text-uppercase active"><Link to="/json1">json1</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/json2">json2</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/json3">json3</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/json4">json4</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/json5">json5</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/json6">json6</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase active"><Link to="/fake1">fakestore1</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/fake2">fakestore2</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/fake3">fakestore3</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/fill1">filltext1</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/fill2">filltext2</Link></a></li><br/>
                            <li className="nav-item"><a className="nav-link text-uppercase" ><Link to="/fill3">filltext3</Link></a></li><br/>
                        </ul>
                    </div>
                    </nav>
                    </header>
                    </div>
}