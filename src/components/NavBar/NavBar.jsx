
import { Link } from "react-router-dom";

import React from 'react';
import './NavBar.css'

function NavBar() {

    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Cartelera</Link></li>
                <li><Link to={'/vida-y-ministerio'}>Vida y Ministerio</Link></li>
                <li><Link to={'/asignaciones'}>Asignaciones</Link></li>
                <li><Link to={'/atalaya'}>Atalaya</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;