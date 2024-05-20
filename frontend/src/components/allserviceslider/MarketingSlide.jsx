import React from 'react'
import { motion } from "framer-motion"

function MarketingSlide() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="dfw"
    >MarketingSlide</motion.div>
  )
}

export default MarketingSlide