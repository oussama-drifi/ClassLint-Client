import './App.css'
import SideBar from './components/SideBar/SideBar'
import { AppRoutes } from './routes/AppRoutes'
function App() {

  return (
    <>
      <div className="app">
        <SideBar />
        <AppRoutes />
      </div>
    </>
  )
}

export default App