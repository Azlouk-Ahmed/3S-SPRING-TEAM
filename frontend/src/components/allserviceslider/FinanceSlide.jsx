import React from 'react'
import { motion } from "framer-motion"

function FinanceSlide() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="dfw"
    >FinanceSlide</motion.div>
  )
}

export default FinanceSlide