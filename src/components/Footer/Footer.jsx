import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className='bg-Teal p-10'
    >
      <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 place-items-start text-white'>
        <div>
          <div className='font-bold mb-6'>Get Started</div>
          <p className='text-sm leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quas voluptates, dolores officia cumque tenetur illo eum.
            Quia quam quae enim.</p>
        </div>
        <div>
          <div className='font-bold mb-6'>Services</div>
          <div className='flex flex-col gap-3'>
            <a href="" className='text-sm leading-7 hover:underline'>Software / Web Development</a>
            <a href="" className='text-sm leading-7 hover:underline'>Science & Technology</a>
            <a href="" className='text-sm leading-7 hover:underline'>Cyber Security</a>
            <a href="" className='text-sm leading-7 hover:underline'>Digital Marketing</a>
          </div>
        </div>
        <div>
          <div className='font-bold mb-6'>Company</div>
          <div className='flex flex-col gap-3'>
            <a href="" className='text-sm leading-7 hover:underline'>Privacy Policy</a>
            <a href="" className='text-sm leading-7 hover:underline'>Sitemap</a>
            <a href="" className='text-sm leading-7 hover:underline'>Careers</a>
            <a href="" className='text-sm leading-7 hover:underline'>Terms & Conditions</a>
          </div>
        </div>
        <div>
          <div className='font-bold mb-6'>Follow Us</div>
          <div className='text-sm mb-4 break-all'>skilluplearnings@gmail.com</div>
          <div className='text-sm'>+919167949688</div>
          <div className='flex gap-5 flex-wrap mt-4'>
            <a href="" className='hover:scale-110'>
              <BsInstagram size={22} />
            </a>
            <a href="" className='hover:scale-110'>
              <BsTwitter size={22} />
            </a>
            <a href="" className='hover:scale-110'>
              <BsPinterest size={22} />
            </a>
            <a href="" className='hover:scale-110'>
              <BsFacebook size={22} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer


  // < div >
  //         <div className='font-bold mb-6'>Follow Us</div>
  //         <div className='text-sm mb-4'>skilluplearnings@gmail.com</div>
  //         <div className='text-sm'>+919167949688</div>
  //         <div className='flex gap-5 mt-4'>
  //           <a href="" className='hover:scale-110'>
  //             <BsInstagram size={22} />
  //           </a>
  //           <a href="" className='hover:scale-110'>
  //             <BsTwitter size={22} />
  //           </a>
  //           <a href="" className='hover:scale-110'>
  //             <BsPinterest size={22} />
  //           </a>
  //           <a href="" className='hover:scale-110'>
  //             <BsFacebook size={22} />
  //           </a>
  //         </div>
  //       </ div>
