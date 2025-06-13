import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction </p>
      <h2 className={styles.heroHeadText}> Overview</h2>
      
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I'm a skilled full-stack developer with a passion for creating dynamic and responsive web applications. My expertise lies in both front-end and back-end development, allowing me to build complete solutions that deliver exceptional user experiences. I thrive on challenges and continuously seek to expand my knowledge in the ever-evolving tech landscape.
      I have a strong foundation in various programming languages and frameworks, enabling me to tackle diverse projects with confidence. My goal is to leverage my skills to contribute to innovative and impactful software solutions that make a difference.
    </motion.p>
    </>
  )
}

export default About;