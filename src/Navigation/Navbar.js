import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';

const Navbar = () =>{
    return(
        <div className='navbar'>
            <ul>
                <li><Link to='/'>BooksStreams</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;