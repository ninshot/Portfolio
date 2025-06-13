import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

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
      I'm a fourth-year Computer Science student from the University of Saskatchewan. I really like designing websites and trying out different UI styles, and I've got hands-on experience with languages like Java, JavaScript, C, C#, Python, and Rust. My big passions are web development, making things look and feel great with UI/UX design, and exploring the exciting world of AI and machine learning. I love learning and staying on top of the latest tech trends.
    </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");