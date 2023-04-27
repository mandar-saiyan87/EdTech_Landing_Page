import React from 'react';
import { categories } from '../Data';
import { courses } from '../Data';
import CategoryCard from './CategoryCard';
import CourseCard from './CourseCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";


const Course = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet2: {
      breakpoint: { max: 1023, min: 415 },
      items: 2.5
    },
    tablet1: {
      breakpoint: { max: 414, min: 391 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 1
    }
  }

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
  return (
    <div className='section' id='course'>
      <div className='text-center'>
        <div className='text-2xl md:text-3xl font-bold mb-5'>
          Our top <span className='text-Teal'>Categories</span>
        </div>
        <p className='max-w-[700px] text-sm text-gray leading-7 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque, ex possimus vitae nisi ea, itaque, amet eveniet ipsam quibusdam odio similique aliquid?
          Temporibus distinctio ex excepturi nesciunt veritatis magni quia?Lorem ipsum dolor sit amet.
        </p>
      </div>
      <motion.div
        className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {categories.map(cat => {
          return (
            <CategoryCard key={cat.id} {...cat} />
          )
        })}
      </motion.div>
      <div className='text-xl font-bold mt-12'>Most Popular Courses</div>
      <Carousel responsive={responsive} infinite={true} itemClass='px-1 md:px-2' containerClass='md:-mx-2 mt-2'>
        {courses.map((course) => {
          return (
            <CourseCard key={course.id} {...course} />
          )
        })}
      </Carousel>

    </div>
  )
}

export default Course
