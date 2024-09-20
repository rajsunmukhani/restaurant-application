import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Welcome from './Components/Welcome'
import Home from './Components/Homee'
import { Route, Routes } from 'react-router-dom'
import Context from './Context/Context'
import Summary from './Components/Summary'
import Checkout from './Components/Checkout'
import SignUp from './Components/Signup'
import Login from './Components/Login'
import PrivateRoute from './utils/PrivateRoutes'


const App = () => {
  return (
    <div>
      <Context>
        <Nav/>
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<PrivateRoute><Welcome /></PrivateRoute>} />
          <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>  } />
          <Route path='/summary' element={<PrivateRoute><Summary /></PrivateRoute>} />
          <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
        </Routes>
      </Context>
    </div>
  )
}

export default App