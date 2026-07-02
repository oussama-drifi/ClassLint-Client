import React, { useState } from "react";
import './SideBar.css';
import { NavLink } from "react-router-dom";
import { House, LayoutDashboard, CalendarDays, Users, Settings, Plus, User, Sun, LogOut, X } from "lucide-react";

const SideBar = () => {

    return (
        <aside className="sidebar">
            <nav>
                <ul className="primary-links">
                    <li>
                        <House />
                    </li>
                    <li>
                        <NavLink 
                            to='/sommaire' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><LayoutDashboard /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/emploi' 
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><CalendarDays /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/formateurs'
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><Users /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/ajouter'
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><Plus /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/paramètres'
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            <span><Settings /></span>
                        </NavLink>
                    </li>
                </ul>

                <ul className="seconday-links">
                    <li><a href="#"><span><User /></span></a></li>
                    <li><a href="#"><span><Sun /></span></a></li>
                    <li><a href="#"><span><LogOut /></span></a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar