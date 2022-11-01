import React from "react";
import { motion } from "framer-motion";

let SkillCard = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "10px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: `${props.i}` * 0.05, ease: "easeIn" }}
        className="p-8 space-y-2 mt-12 w-96 sm:w-72 md:w-80 xl:w-88 2xl:w-96 h-48 sm:mt-0 text-left transtion-all duration-300 ease-in-out hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.315),0_6px_6px_0_rgba(0,0,0,0.205)] rounded-md foldSkillCard"
      >
        <h2 className="text-2xl py-5 text-black dark:text-white font-semibold leading-6">
          {props.head}
        </h2>
        <p className="text-lg text-slate-800 dark:text-slate-200">
          {props.lang}
        </p>
      </motion.div>
    </>
  );
};

export default SkillCard;
