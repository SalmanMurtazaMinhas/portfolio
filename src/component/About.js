import React from 'react'
import { motion, spring } from 'framer-motion'

export default function About() {
  return (
    <motion.div className='about-div'
        initial= {{opacity: 0 , x: -920}}
        animate={{opacity: 1 , x: 0}}
        // transition={{ delay: 0 , duration: 1 }}
        transition={{ delay: 0.2 , type: 'spring' , stiffness: 120 }}
    >
        <p>Passionate software engineer seeking out innovative solutions to everyday problems using HTML, CSS, JS design. Keen to create systems and applications to solve real-world problems  fulfilling a purposeful need. Motivated by developing software in languages that are best fit for the project, and utilising it for continuous learning and performance enhancement. Interested in bringing new skills and a unique artistic and creative perspective to the organisation</p>
    </motion.div>
  )
}
