import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => function HOC() {
    return(
        <motion.section 
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            {/* The span with class "hash-span" is used to create a linkable anchor for the section */}
            <Component />
        </motion.section>
    )
}

export default SectionWrapper;