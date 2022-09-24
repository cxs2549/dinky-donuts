import React, { ReactNode } from "react"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -10 },
}

const Layout = ({ children, classes }) => (
  <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "linear" }}
    className={`max-w-7xl mx-auto bg-white dark:bg-surface ${classes}`}
  >
    {children}
  </motion.main>
)

export default Layout
