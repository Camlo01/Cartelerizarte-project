import React, { useState } from "react";
import './NavBar.css';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initGA } from "../../utils/analytics";

function NavBar() {

    // Dropdown menu behavior
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Google Analytics & Location
    const location = useLocation()

    useEffect(() => {
        setDocumentTitle(location)
        initGA()
    }, [location])

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

function setDocumentTitle(location) {
    const restOfTitle = " | Cartelera de reuniones";

    const titles = {
        "/": "Inicio",
        "/vida-y-ministerio": "Vida y Ministerio",
        "/asignaciones": "Asignaciones",
        "/atalaya": "Atalaya",
        "/conferencias": "Conferencias",
        "/limpieza": "Limpieza",
    };

    document.title = (titles[location.pathname] || "No encontrado") + restOfTitle;
};