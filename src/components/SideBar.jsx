import React, { useState } from "react";
import Logo from './logo_ofppt.png'
import './SideBar.css'
const SideBar = () => {

    return (
        <aside className="sidebar">
            <header>
                <h2>Logo OFPPT</h2>
            </header>
            <nav>
                <ul className="primary-links">
                    <li className="active"><a href="#"><span><i className="bi bi-columns-gap"></i></span> Sommaire</a></li>
                    <li><a href="#"><span><i className="bi bi-calendar2-week"></i></span> Emploi du Temps</a></li>
                    <li><a href="#"><span><i className="bi bi-card-text"></i></span> Archieve</a></li>
                    <li><a href="#"><span><i className="bi bi-gear"></i></span> Settings</a></li>
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