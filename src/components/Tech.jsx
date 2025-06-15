import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { technologies } from '../constants'

const TechnologyCard = ({technology}) => {
  return(
    <div className="flex items-center gap-4">
      <img
        src={technology.image}
        alt={technology.name}
        className="w-10 h-10 object-contain"
      />
      <p className="text-secondary text-[17px] leading-[30px]">
        {technology.name}
      </p>
    </div>

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
          <TechnologyCard technology = {technology} key={idx}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech");