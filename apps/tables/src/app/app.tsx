import { Route, Routes, Navigate, NavLink, useLocation } from 'react-router-dom'
import Login from '../pages/Login'
import Staffing from '../pages/Staffing'
import TrainingCenters from '../pages/TrainingCenters'
import './app.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export function App() {
  const location = useLocation()

  return (
    <>
      {
        location.pathname === '/' ? null :
          <ul className="nav nav-underline mx-3 mb-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/staffing">Staffing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/training">Training Centers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>
          </ul>
      }
      <Routes>
        <Route
          path="/"
          element={
            <Login></Login>
          }
        />
        <Route
          path="/staffing"
          element={
            <Staffing></Staffing>
          }
        />
        <Route
          path="/training"
          element={
            <TrainingCenters></TrainingCenters>
          }
        />
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </>
  )
}

export default App
