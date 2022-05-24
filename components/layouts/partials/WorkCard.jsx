import React from "react";
import { motion } from 'framer-motion';

let WorkCard = (props) => {
   return (
      <>
         <a key={props.id} href={props.link} target="_blank">
            <motion.div initial={{ opacity: 0, translateY: '10px' }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: `${props.delay}`, ease: "easeIn" }} className="py-8 px-6 sm:h-72 sm:px-10 md:px-8 h-[17rem] bg-blue-600 hover:bg-blue-700 border-transparent rounded-md shadow-md space-y-2 mt-5 ml-4 w-11/12 sm:ml-0 sm:w-80 md:w-96 sm:mt-0 md:h-72 lg:h-64 lg:w-[30rem] text-left relative transtion-all duration-300 ease-in-out top-0 hover:-top-1 hover:shadow-xl">

               <h2 className="text-2xl py-5 text-white font-semibold leading-6">{props.title}</h2>
               <p className="text-lg text-slate-200">{props.desc}</p>
               <p className="text-lg text-slate-200 py-1 lg:py-2 w-11/12">{props.lang}</p>

            </motion.div>
         </a>
      </>
   )
}

export default WorkCard;