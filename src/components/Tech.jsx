import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { technologies } from '../constants'

const TechnologyCard = ({text}) => {
  return(
    <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"> {text}</p>

  )

}

const Tech = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            WHAT I CAN DO</p>
          <h2 className={styles.heroHeadText}> SKILLS</h2>
      </motion.div>
      <div className='max-w-3xl flex flex-wrap gap-10'>
        {technologies.map((technology, idx) => (
          <TechnologyCard text = {technology} key={idx}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech");