import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'
import { projects } from '../constants'
import { github } from '../assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const ProejectCard = ({index, name, description, tags, image , source_code_link}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }
  return(
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className='bg-tertiary p-5 rounded-2xl w-full max-w-[500px]'>
          <div className='relative w-full h-[250px]'>
          <Slider {...settings}>
            {image.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`${name} screenshot ${i + 1}`}
                  className='w-full h-[250px] object-contain rounded-2xl'
                />
              </div>
            ))}
          </Slider>

            <div className = 'absolute inset-0 flex justify-end m-3 card-img_hover' >
              <div 
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />

              </div>

            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p 
                key={tag.name}
                className={`text-[14px] ${tag.color}`}
              >
                {tag.name}
              </p>
            ))}
          </div>
         </div> 
      </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            What I Have Done So Far</p>
          <h2 className={styles.heroHeadText}> PROJECTS</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I have worked on a variety of projects that showcase my skills in web development, 
          including building responsive websites, creating interactive user interfaces, 
          and implementing backend functionalities. 
          My portfolio includes projects that demonstrate my ability to solve real-world problems 
          and deliver high-quality solutions.
        </motion.p>
      </div>
      <div className = 'mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
        <ProejectCard 
          key={`project-${index}`} 
          {...project}
          index={index}
        />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");