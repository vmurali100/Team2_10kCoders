import React from 'react';
import {Link} from "react-router-dom"

export const Nav = () => {
  return (<div>
      <nav>
          <ul>
              <li>
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
              </li>
          </ul>
      </nav>
  </div>);
};
