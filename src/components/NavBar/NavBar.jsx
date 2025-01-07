import { Link } from "react-router-dom";
import React, { useState } from "react";
import './NavBar.css';

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">Cartelera</Link></li>
                <li
                    onClick={toggleDropdown}
                >
                    <span className="dropdown-title">{"Cronogramas"}</span>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/vida-y-ministerio">Vida y Ministerio</Link></li>
                            <li><Link to="/asignaciones">Asignaciones</Link></li>
                            <li><Link to="/atalaya">Atalaya</Link></li>
                            <li><Link to="/conferencias">Conferencias</Link></li>
                            <li><Link to="/limpieza">Limpieza</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;