import React from 'react';  
import { NavLink } from 'react-router-dom';
import { pages } from '../../pages';

export default function NavBar() { 

const NavLinks = pages.map(
    ({ path, name }) => {
        return (
            <NavLink           
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}> 
                &nbsp;{name}
            </NavLink>
        )
    }
);

return (
    <nav>{NavLinks}</nav>
)

}