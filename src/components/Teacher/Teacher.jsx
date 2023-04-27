import React from 'react';
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { accordions } from "../Data";
import Accordions from './Accordions';


const Teacher = () => {
  return (
    <div className='section' id='teacher'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className=''>
          <div className='text-[1.5rem] md:text-[1.8rem] font-bold mb-5'>
            Become <span className='text-Teal'>An Instructor</span>
          </div>
          <p className='text-sm text-gray leading-7 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sed dolorem a repellat laborum perferendis expedita sapiente laboriosam hic exercitationem corporis,
            saepe laudantium! Quaerat dolorem enim blanditiis quasi voluptatum,
          </p>
          <button className='py-3 px-6 bg-black text-sm font-bold text-white rounded-lg'>Start Teaching</button>
        </div>
        <div className=''>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            stopOnHover={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
          >
            <img src={teacher1} alt={teacher1} className='aspect-[16/13]' />
            <img src={teacher2} alt={teacher2} className='aspect-[16/13]' />
          </Carousel>
        </div>
      </div>
      <div className='text-center text-[1.5rem] md:text-[1.8rem] my-8 font-bold'>
        Frequently <span className='text-Teal'>Asked Questions</span>
      </div>
      <div className='max-w-[700px] mt-12 mx-auto'>
        {accordions.map(accordian => {
          return (
            <Accordions key={accordian.id} {...accordian} />
          )
        })}
      </div>
    </div>
  )
}

export default Teacher
