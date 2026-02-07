import React, { useState } from "react";
import Logo from './logo_ofppt.png'
import './SideBar.css';
import { NavLink } from "react-router-dom";

const SideBar = () => {

    return (
        <aside className="sidebar">
            <nav>
                <ul className="primary-links">
                    <li>
                        <span><i className="bi bi-house"></i></span>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/sommaire' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-columns-gap"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/emploi' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-calendar2-week"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/archive' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-people"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/ajouter'
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-plus-lg"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/settings'
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-gear"></i></span>
                        </NavLink>
                    </li>
                </ul>

                <ul className="seconday-links">
                    <li><a href="#"><span><i className="bi bi-person"></i></span></a></li>
                    <li><a href="#"><span><i className="bi bi-brightness-high"></i></span></a></li>
                    <li><a href="#"><span><i className="bi bi-box-arrow-left"></i></span></a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar