import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Android from '../pages/Android/Android'
import Display from '../pages/Display/Display'
import Home from '../pages/Home/Home'
import Migration from '../pages/Migration/Migration'
import Notice from '../pages/Notice/Notice'
import Print from '../pages/Print/Print'
import Requisition from '../pages/Requisition/Requisition'
import Test from '../pages/Test/Test'
import Web from '../pages/Web/Web'

function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/android' element={<Android></Android>}></Route>
                <Route path='/web' element={<Web></Web>}></Route>
                <Route path='/print' element={<Print></Print>}></Route>
                <Route path='/display' element={<Display></Display>}></Route>
                <Route path='/test' element={<Test></Test>}></Route>
                <Route path='/notice' element={<Notice></Notice>}></Route>
                <Route path='/requisition' element={<Requisition></Requisition>}></Route>
                <Route path='/migration' element={<Migration></Migration>}></Route>
                <Route path="*"element={<Navigate to="/" replace />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing