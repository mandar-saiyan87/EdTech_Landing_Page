import React, { useState } from 'react'
import { Navbar, Home, About, Contact, Course, Footer, Teacher } from "./components/index";


function App() {


  return (
    <>
      <div className='bg-Solitude font-Poppins'>
        <Navbar />
        <Home />
        <About />
        <Course />
        <Teacher />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
