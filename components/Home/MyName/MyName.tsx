import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className=" flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
    <div className="mt-[-30px]">
    <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hellow ! I am ,
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAtertiary  font-bold text-3xl lg:text-5xl sm:text-5xl md:text-6xl mt-4"
      >
        Ali Hussnain Jamil
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-500 font-bold text-2xl lg:text-5xl sm:text-5xl md:text-6xl mt-4"
      >
        I am the founder of DevLuce
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-500  font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-AAsecondary">Full Stack Developer</span>, I possess strong problem-solving skills and
        specialize in crafting exceptional <br className="2xl:block hidden" />
        digital experiences. My current area of focus is in the <span className="text-AAsecondary">UI Desing & Frontend Development</span>,
        where I actively engage in developing 
        and designing immersive <span className="text-AAsecondary">web3 applications</span>. This involves working with{" "}
        <span className="text-AAsecondary">Smart Contracts</span>  on the{" "}
        <span className="text-AAsecondary">Frontend Development</span>. 
        {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
        front-end components to enable seamless user interactions. */}
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href="https://wa.me/923473029577?text=Hello%2C%20I%20need%20help!" target={"_blank"} rel="noopener noreferrer">
          <button className="bg-AAsecondary text-AAprimary border rounded-xl px-4 sm:px-8 py-[12px] sm:py-[12px] border-AAsecondary">
          Schedule a meeting !
          </button>
        </a>
      </motion.div>
    </div>
    </div>
  );
}
