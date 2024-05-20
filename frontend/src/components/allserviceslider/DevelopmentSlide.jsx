import React from 'react'
import { motion } from "framer-motion"

function DevelopmentSlide() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="dfw"
    >DevelopmentSlide</motion.div>
  )
}

export default DevelopmentSlide