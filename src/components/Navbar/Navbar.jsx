import React, { useState, useRef, useEffect } from 'react';
import { navLinks } from "../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';
import { motion } from "framer-motion"

const Navbar = () => {


  const [mobileNav, setMobileNav] = useState(false)

  const [active, setActive] = useState(null)

  const navRef = useRef();


  const handleNavScroll = () => {
    setActive(window.scrollY > 20);
  }

  const toggleNav = () => {
    setMobileNav(false)
  }

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      toggleNav()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleNavScroll)

    return () => {
      window.removeEventListener('scroll', handleNavScroll)
    }
  }, [active])



  return (
    <>
      <div className={active ? 'w-full fixed top-0 left-0 z-20 shadow-lg bg-Solitude' : 'w-full fixed top-0 left-0 z-20'}>
        <div>
          <div className='flex items-center justify-between container mx-auto py-4 px-2'>
            <div className='flex items-center gap-3'>
              <HiMenuAlt1 className='text-3xl cursor-pointer md:hidden' onClick={() => setMobileNav(true)} />
              <div className='text-xl font-bold tracking-wide uppercase text-Teal'>Skillup</div>
            </div>
            <div className='hidden md:flex items-center gap-8'>
              {navLinks.map(nav => {
                return (
                  <li className='list-none cursor-pointer' key={nav.id}>
                    <Link to={nav.href} spy={true} smooth={true} offset={-50} duration={500} className='font-bold duration-300 transition-all'>{nav.link}</Link>
                  </li>
                )
              })}
            </div>
            <button className='text-sm text-white font-bold bg-black px-5 py-2 rounded-lg'>Sign Up</button>
            {mobileNav &&
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='md:hidden flex flex-col items-center justify-center gap-8 bg-Teal fixed w-[70%] h-full top-0 left-0 z-20 text-white' ref={navRef}>
                {navLinks.map(nav => {
                  return (
                    <li className='list-none cursor-pointer' key={nav.id}>
                      <Link to={nav.href} spy={true} smooth={true} offset={-50} duration={500} className='font-bold duration-300 transition-all' onClick={toggleNav}>{nav.link}</Link>
                    </li>
                  )
                })}
                <HiX className='absolute right-9 top-11 cursor-pointer' size={20} onClick={() => setMobileNav(false)} />
              </motion.div>}
          </div>
        </div>
      </div>
    </>

  )
}

export default Navbar
