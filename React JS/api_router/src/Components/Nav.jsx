import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return <div className='wrapper'>
        <h1>React Router</h1>
        <ul>
            <Link to="/"> <li>Home</li></Link>
            <Link to="/albums"><li>Albums</li></Link>
            <Link to="/comments"><li>Comments</li></Link>
            <Link to="/photos"><li>Photos</li></Link>
            <Link to="/posts"><li>Post</li></Link>
            <Link to="/todos"><li>Todos</li></Link>
            <Link to="/users"><li>Users</li></Link>
            <Link to="/cart"><li>Carts</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/usersfake"><li>Usersfake</li></Link>
            <Link to="/employe"><li>Employe</li></Link>
            <Link to="/name"><li>Name</li></Link>
            <Link to="/person"><li>Person</li></Link>
        </ul><br/>
    </div>;
  
       
};
