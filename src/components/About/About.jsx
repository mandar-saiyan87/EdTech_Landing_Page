import React from 'react';
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='grid lg:grid-cols-2 gap-8 place-items-center'>
        <div className='border-[3px] border-Teal border-solid rounded-lg'>
          <img src={about} alt="about" className='p-4' />
        </div>
        <div>
          <div className='text-[1.5rem] lg:[1.8rem] font-bold mb-5'>
            We provide the <br /> best <span className='text-Teal'>Online courses</span>
          </div>
          <p className='text-sm text-gray leading-7 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime rerum ratione magnam quibusdam non earum architecto a repudiandae itaque possimus ipsum sed,
            tempora deserunt at nesciunt officia? Quae,
            necessitatibus animi?
          </p>
          <button className='py-3 px-6 bg-black text-sm font-bold text-white rounded-lg'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default About
