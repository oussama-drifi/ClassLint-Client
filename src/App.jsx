import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import './App.css'

import SideBar from './components/SideBar/SideBar'
import Summary from'./pages/Summary/Summary'
import Schedule from './pages/Schedule/Schedule'
import Settings from './pages/Settings/Settings'
import AddNew from './pages/AddNew/AddNew'
import { useRef, useState, useEffect } from 'react'


function Layout() {
  return (
    <div className='content'>
      <Outlet />
    </div>
  )
}

import { getSessionDetails } from './app/selectors/selectors'
import { useSelector } from 'react-redux'; 

import AjouteSceance from './features/Summary/components/AddSessionModal/AddSessionModal'

function App() {

  const { isModalOpen } = useSelector(getSessionDetails);

  return (
    <>
      <div className="app">
        <SideBar />
        {
          isModalOpen && <AjouteSceance />
        }
        <Routes>
          <Route path="/Gestion-Emploi-Temps" element={<Layout />} >
            <Route index element={<Navigate to="sommaire" replace />} />
            <Route path="sommaire" element={<Summary />} />
            <Route path="emploi" element={<Schedule />} />
            <Route path="ajouter" element={<AddNew />} />
            <Route path="paramètres" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App