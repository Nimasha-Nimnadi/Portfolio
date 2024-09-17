import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl">Get In Touch </motion.h1>
        <div className="text-center tracking-tighter">
        <motion.p
        whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
        className="my-4"> 71/1, Dedunupitiya, Kandy</motion.p>
        <motion.p
        whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
        className="my-4"> (+94) 77 3936159</motion.p>
        <a href="#" className="border-b"> nimnadinw@gmail.com  </a>
        </div>
    </div>
  )
}

export default Contact