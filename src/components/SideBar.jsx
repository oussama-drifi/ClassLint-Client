import React, { useState } from "react";
import Logo from './logo_ofppt.png'
import './SideBar.css'
import { NavLink } from "react-router-dom";

const SideBar = () => {

    return (
        <aside className="sidebar">
            <header>
                <h2>Logo OFPPT</h2>
            </header>
            <nav>
                <ul className="primary-links">
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/sommaire' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-columns-gap"></i></span> Sommaire
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/emploi' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-calendar2-week"></i></span> Emploi du Temps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/archive' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-card-text"></i></span> Archieve
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='Gestion-Emploi-Temps/settings'
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><i className="bi bi-gear"></i></span> Paramètres
                        </NavLink>
                    </li>
                </ul>

                <ul className="seconday-links">
                    <li><a href="#"><span><i className="bi bi-person"></i></span> User</a></li>
                    <li><a href="#"><span><i className="bi bi-brightness-high"></i></span> Theme</a></li>
                    <li><a href="#"><span><i className="bi bi-box-arrow-left"></i></span> Log out</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar