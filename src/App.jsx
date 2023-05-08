import { useState } from 'react'
import hse from './assets/hse.png'
import operateur from './assets/operateur.png'
import superviseur from './assets/superviseur.png'
import { Link, Route, Routes, Navigate } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import { Card, Grid } from '@mui/material'
import { textAlign } from '@mui/system'
import HSE from './pages/HSE';
import Operateur from './pages/Operateur';
import Superviseur from './pages/Superviseur';
import Welcome from './pages/Welcome';

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/HSE' element={<HSE />} />
        <Route path='/Operateur' element={<Operateur />} />
        <Route path='/Superviseur' element={<Superviseur />} />
        {/* <Route path='/HowToUse' element={<HowToUse />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Adminpanel' element={<Adminpanel />} />
        <Route path='/ExamContent' element={<ExamContent />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/User' element={<Userpanel/>} /> */}
      </Routes>
     
    </>
  )
}

export default App
