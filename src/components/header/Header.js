import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <Link exact to='/'>
            <div className='header'>
                <div className='title'>
                    Todo Project
                </div>
            </div>
        </Link>
    )
};

export default Header;