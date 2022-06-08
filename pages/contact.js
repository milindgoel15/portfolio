import Head from 'next/head'
import ContactCard from "../components/layouts/partials/ContactCard";
import ContactData from "../utils/ContactData";
import { motion } from 'framer-motion';

let contact = () => {
   return (
      <>
         <Head>
            <title>Connect with me</title>
            <meta name="title" content="Connect with me" />
            <meta name="description" content="Want to hire me or have a little chat? Feel free to contact!" />
         </Head>
         <main className="py-20 text-center " >
            <motion.h2 initial={{ opacity: 0, translateY: '30px' }} whileInView={{ opacity: 1, translateY: 0, transitionDuration: 0.5 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-extrabold text-4xl py-8 xl:mx-110 text-black dark:text-white heading">Connect with me</motion.h2>

            <section className="flex justify-center">

               <div className="grid relative grid-rows-6 gap-4 sm:grid-cols-2 sm:grid-rows-3 sm:mt-6 sm:gap-8 lg:grid-col-2 lg:grid-rows-3 lg:grid-flow-col lg:gap-12">

                  {
                     ContactData.map((props, i) => (
                        <ContactCard
                           key={props.id}
                           image={props.image}
                           link={props.link}
                           social={props.social}
                           username={props.username}
                           i={i}
                        />
                     ))
                  }

                  <div className="hidden md:block w-96 h-96 md:ml-128 lg:ml-162 xl:ml-180 pointer-events-none absolute border-2 border-gray-600 rounded-full">
                  </div>
               </div>

            </section>
         </main>
      </>
   )
}

export default contact;