import React from 'react';
//import { NavLink } from 'react-router-dom';
import Icon from '../../public/assets/react-icon.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='ext-links __ext-links'>
                <div className='ext-links__wrap'>
                    <div className='ext-links__icon'>
                        <a href='/'>
                            <img src={ Icon } alt='Powered by React' />
                        </a>
                    </div>
                    <ul className='ext-links__nav'>
                        <li className='ext-links__nav-item'>
                            <a href='#'>GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;