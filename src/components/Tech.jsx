import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { technologies } from '../constants'

const TechnologyCard = ({text}) => {
  return(
    <p> {text}</p>

  )

}

const Tech = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
             </p>
          <h2 className={styles.heroHeadText}> SKILLS</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((technology, idx) => (
          <TechnologyCard text = {technology} key={idx}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech");