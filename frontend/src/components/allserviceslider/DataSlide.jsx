import React from 'react'
import { motion } from "framer-motion"

function DataSlide() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="dfw"
    >DataSlide</motion.div>
  )
}

export default DataSlide