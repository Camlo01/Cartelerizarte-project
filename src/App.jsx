import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home/HomePage'))
const Ministerio = lazy(() => import('./pages/Ministerio/MinisterioPage'))
const Asignaciones = lazy(() => import('./pages/Asignaciones/AsignacionesPage'))
const Atalaya = lazy(() => import('./pages/Atalaya/AtalayaPage'))

function App() {

  const defaultStyles = {
    boxSizing: 'border-box'
  }

  return (
    <app>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/vida-y-ministerio' element={<Ministerio />} />
            <Route path='/asignaciones' element={<Asignaciones />} />
            <Route path='/atalaya' element={<Atalaya />} />

            <Route path='*' element={<Home />}></Route> {/* 404 Route */}
          </Route>
        </Routes>
      </Router>
    </app>
  )
}

export default App
