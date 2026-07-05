import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
// pages
import SummaryPage from '../pages/Summary/SummaryPage'
import SchedulePage from '../pages/Schedule/SchedulePage'
import InstructorsPage from '../pages/Instructors/InstructorsPage'
import AddNewPage from '../pages/AddNew/AddNewPage'
import SettingsPage from '../pages/Settings/SettingsPage'

function Layout() {
    return (
        <div className='content'>
        <Outlet />
        </div>
    )
}
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Navigate to="sommaire" replace />} />
                <Route path="sommaire" element={<SummaryPage />} />
                <Route path="emploi" element={<SchedulePage />} />
                <Route path="formateurs" element={<InstructorsPage />} />
                <Route path="ajouter" element={<AddNewPage />} />
                <Route path="paramètres" element={<SettingsPage />} />
            </Route>
        </Routes>
    )
}
