import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import './App.css'

import SideBar from './components/SideBar'
import Sommaire from'./pages/Sommaire'
import Emploi from './pages/Emploi'
import Settings from './pages/Settings'
import Archive from './pages/Archive'
import { useRef, useState, useEffect } from 'react'

// import TableSchedule from './components/TableEmploi'
// import TableEmploi from './components/TableEmploi'
function Layout() {
  return (
    <div className='content'>
      <Outlet />
    </div>
  )
}

import AjouteSceance from './components/AddSessionModal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true);
  
  return (
    <>
    {/* <TableEmploi /> */}
      <Router>
        <div className="app">
          <SideBar />
          {
            isModalOpen && <AjouteSceance setIsModalOpen={setIsModalOpen} />
          }
          <Routes>
            <Route path="/Gestion-Emploi-Temps" element={<Layout />} >
              <Route index element={<Sommaire />} />
              <Route path="sommaire" element={<Sommaire />} />
              <Route path="emploi" element={<Emploi />} />
              <Route path="archive" element={<Archive />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App