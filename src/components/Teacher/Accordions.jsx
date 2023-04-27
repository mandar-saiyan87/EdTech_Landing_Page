import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordions = ({ id, title }) => {

  const [active, setActive] = useState(null)

  const handleClick = (id) => {
    setActive(id === active ? null : id);
  }
  return (
    <div className='pb-8'>
      <div className='flex items-center justify-between'>
        <div className='text-base md:text-xl font-bold'>
          {title}
        </div>
        <BsChevronDown className={`${id === active ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300`} onClick={() => handleClick(id)} />
      </div>
      <AnimatePresence>
        {id === active && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p className='text-sm text-gray leading-7'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem nisi tenetur tempora porro dolorum ipsa, qui quis culpa mollitia nam fugit,
              nihil exercitationem magnam dolor impedit, quae possimus. Ipsam,
              saepe.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordions
