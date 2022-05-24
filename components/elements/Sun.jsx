import React from "react"
import { motion } from 'framer-motion';

let Sun = (props, {rotate}) => {
  let rotateAnim = {
    hidden: {
      opacity: 1,
      rotate: 180
    },
    show: {
      opacity: 1,
      rotate: 0
    }
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2 transition-all duration-200 fill-white hover:fill-blue-500 stroke-white hover:stroke-blue-500"
      viewBox="0 0 24 24"
      strokeWidth={2}
      variants={rotateAnim}
      animate={rotate ? 'show' : 'hidden'}
      viewport={{ once: true }} 
      transition={{ duration: 0.2 }}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
      />
    </motion.svg>
  )
}

export default Sun
