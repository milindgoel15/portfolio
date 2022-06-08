import Head from 'next/head'
import SkillCard from "../components/layouts/partials/SkillCard";
import SkillsData from "../utils/SkillsData";
import { motion } from 'framer-motion';

let skills = () => {

   return (
      <>
         <Head>
            <title>Skills</title>
            <meta name="title" content="Skills" />
            <meta name="description" content="Building beautiful web experiences for various businesses with coffee and code." />
         </Head>
         <main className="py-20 text-center">
            <motion.h2 initial={{ opacity: 0, translateY: '30px' }} whileInView={{ opacity: 1, translateY: 0, transitionDuration: 0.5 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-extrabold text-4xl py-1 xl:mx-110 2xl:mx-128 text-black dark:text-white heading">Skills</motion.h2>

            <section className="flex justify-center">

               <div className="grid relative grid-rows-8 gap-2 sm:grid-cols-2 sm:grid-rows-5 sm:mx-14 sm:mt-12 lg:grid-col-3 lg:grid-rows-3 lg:grid-flow-col lg:gap-5">

                  {
                     SkillsData.map((props, i) => (
                        <SkillCard
                           key={props.id}
                           head={props.head}
                           lang={props.lang}
                           i={i}
                        />
                     ))
                  }

                  <div className="hidden md:block w-96 h-96 md:ml-128 lg:ml-162 xl:ml-174 pointer-events-none absolute border-2 border-gray-600 rounded-full">
                  </div>
               </div>

            </section>
            <div className="hidden md:block w-96 h-96 absolute -mt-40 -ml-56 pointer-events-none border-2 border-gray-600 rounded-full"></div>
         </main>
      </>
   )
}

export default skills;