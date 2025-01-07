import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Layout from './components/Layout'

const Home = lazy(() => import('./pages/home/HomePage'))
const Ministerio = lazy(() => import('./pages/ministerio/MinisterioPage'))
const Asignaciones = lazy(() => import('./pages/asignaciones/AsignacionesPage'))
const Atalaya = lazy(() => import('./pages/atalaya/AtalayaPage'))
const Conferencias = lazy(() => import('./pages/conferencias/ConferenciasPages'))
const Limpieza = lazy(() => import('./pages/limpieza/LimpiezaPage'))

function App() {

  return (
    <app>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/vida-y-ministerio' element={<Ministerio />} />
            <Route path='/asignaciones' element={<Asignaciones />} />
            <Route path='/atalaya' element={<Atalaya />} />
            <Route path='/conferencias' element={<Conferencias />} />
            <Route path='/limpieza' element={<Limpieza />} />

            <Route path='*' element={<Home />}></Route> {/* 404 Route */}
          </Route>
        </Routes>
      </Router>
    </app>
  )
}

export default App
