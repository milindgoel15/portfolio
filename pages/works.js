import Head from 'next/head'
import WorkCard from '../components/layouts/partials/WorkCard';
import WorksData from '../utils/WorksData';
import Button from "../components/elements/Button"
import { motion } from 'framer-motion';

let works = () => {
   return (
      <>
         <Head>
            <title>Recent Works & Contributions</title>
            <meta name="title" content="Recent Works & Contributions" />
            <meta name="description" content="Building beautiful web experiences for various businesses with coffee and code." />
         </Head>

         <main className="py-20 text-center">
            <motion.h2 initial={{ opacity: 0, translateY: '30px' }} whileInView={{ opacity: 1, translateY: 0, transitionDuration: 0.5  }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-extrabold text-2xl py-5 xl:mx-80 2xl:mx-110 text-black dark:text-white md:text-4xl heading">Recents Works & Contributions</motion.h2>

            <section className="flex justify-center items-center">

               <div className="grid relative grid-rows-6 gap-2 sm:mt-12 sm:grid-cols-2 sm:grid-rows-3 sm:gap-4 lg:gap-6 lg:grid-col-2 xl:gap-8 ">

                  {
                     WorksData.map((props, i) => (
                        <WorkCard
                           key={props.id}
                           title={props.title}
                           desc={props.desc}
                           role={props.role}
                           lang={props.lang}
                           link={props.link}
                           i={i}
                        />
                     ))
                  }

                  <div className="hidden md:block w-96 h-96 md:ml-136 lg:ml-162 -z-10 pointer-events-none absolute border-2 border-gray-600 rounded-full">
                  </div>

               </div>

            </section>
            <div className="hidden md:block w-96 h-96 absolute -ml-56 pointer-events-none border-2 border-gray-600 rounded-full"></div>

            <Button link="https://github.com/milindgoel15?tab=repositories" targetValue="_blank" title="Other Contributions" />
         </main>
      </>
   )
}

export default works;