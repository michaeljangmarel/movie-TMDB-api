import React from 'react'

import { Alert } from 'flowbite-react'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import Not from './components/Not'
import Detail from './components/Detail'
import Pagefoot from './components/Pagefoot'

const Soft = () => {
  return (
   <> 
   <Header/>

  <Routes> 
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='movie/detail/:id' element={<Detail/>}/>
     <Route path='*' element={<Not/>}/>
  </Routes>


  <Pagefoot/>
   </>
  )
}

export default Soft