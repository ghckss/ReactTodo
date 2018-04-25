import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () =>{
    const activeStyle = {
    };

    return (
        <div>
            <ul className='menu-list'>
                <li className='menu'><NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink></li>
                <li className='menu'><NavLink exact to='/todo' activeStyle={activeStyle}>Todo</NavLink></li>
                <li className='menu'><NavLink exact to='/etc' activeStyle={activeStyle}>etc</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;