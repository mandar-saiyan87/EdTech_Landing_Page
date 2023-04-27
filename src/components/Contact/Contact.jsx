import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='max-w-[600px] text-center mx-auto'>
        <div className='text-2xl md:text-3xl front-bold mb-5'>Subscribe Newsletter</div>
        <p className='text-sm text-gray leading-7'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eveniet similique rerum doloribus provident laudantium impedit laboriosam!
          Possimus adipisci enim deserunt voluptatem nulla quaerat labore.
        </p>
        <motion.form
          className='mt-5'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <input type="email" placeholder='Enter your email' className='p-2 w-60 md:w-72 outline-none shadow-md' />
          <button className='py-2 px-4 bg-black text-white text-sm font-bold'>Subscribe</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
