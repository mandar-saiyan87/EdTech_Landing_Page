import React from 'react';
import hero from "../../assets/hero.png";
import { logos } from '../Data';
import { motion } from "framer-motion";

const Home = () => {

  const container = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className='section' id='home'>
      <div className='lg:flex items-center justify-between'>
        <div>
          <div className='text-xs text-Teal font-bold mb-4'>
            {" "}
            Your E-Learning Partner
          </div>
          <div className='text-[1.8rem] font-bold md:text-[2.5rem]'>
            This is <br /> the new way <br /> to learn online
          </div>
          <p className='text-sm text-gray leading-7 max-w-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium vero sunt ipsa nesciunt.
            Ipsum, nulla odio!
          </p>
          <div className='mt-6 flex gap-3'>
            <button className='py-3 px-6 bg-Teal text-sm font-bold text-white rounded-lg'>Get Started</button>
            <button className='py-3 px-6 bg-black text-sm font-bold text-white rounded-lg'>Discover</button>
          </div>
        </div>
        <div className='lg:w-[60%]'>
          <img src={hero} />
        </div>
      </div>
      <div>
        <p className='text-xl text-center'>We are collaborated with {" "}<span className='text-Teal'>100+ leading universities and companies</span></p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className='flex items-center justify-center gap-8 flex-wrap p-2'>
          {logos.map((logo, index) => {
            return (
              <motion.div
                variants={item}
                className='w-28' key={index}>
                <img src={logo} alt={logo} className='w-full object-cover' />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Home
