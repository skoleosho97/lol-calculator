import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav'>
            <NavLink className='brand' to='/'>
                    League of Legends Calculator
            </NavLink>
        </div>
    );
};

export default Navigation;