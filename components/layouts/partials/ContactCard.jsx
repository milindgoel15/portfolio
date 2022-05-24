import React from "react";
import { motion } from 'framer-motion';

let ContactCard = (props) => {
   return (
      <>
         <a key={props.id} href={props.link} target="_blank" rel="noopener noreferrer">
            <motion.div initial={{ opacity: 0, translateY: '8px' }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: `${props.delay}`, ease: "easeIn" }} className="p-8 flex items-center bg-blue-600 hover:bg-blue-700 border-transparent rounded-md shadow-md space-y-2 mt-5 h-40 w-84 sm:ml-0 sm:mt-0 sm:w-80 lg:w-[30rem] text-left relative transtion-all duration-300 ease-in-out top-0 hover:-top-1 hover:shadow-xl">
               <div className="lg:pl-2.5 pt-1.5">
                  {props.image}
               </div>

               <div className="flex flex-col px-5 lg:px-9">
                  <h2 className="text-2xl py-1 text-white font-semibold leading-6">{props.social}</h2>
                  <p className="text-lg text-slate-200">{props.username}</p>
               </div>
            </motion.div>
         </a>
      </>
   )
}

export default ContactCard;