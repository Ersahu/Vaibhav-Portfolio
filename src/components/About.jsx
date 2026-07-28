'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants"
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.svg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'
    glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
    tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Introduction</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          I'm a Computer Science and Engineering graduate specializing in Artificial Intelligence & Machine Learning, currently pursuing my M.Tech. I am passionate about building intelligent, scalable, and user-centric applications by combining AI, Full-Stack Development, and modern web technologies.
<br></br><br></br>
My interests lie in developing AI-powered products, including voice agents, chatbots, AI interview assistants, multi-agent systems, and full-stack web applications. I enjoy transforming ideas into practical solutions that solve real-world problems while delivering clean, efficient, and maintainable code.<br></br><br></br>
          I have hands-on experience with:<br></br>

          <b>Languages:</b>  C, HTML, CSS, JavaScript, React, Node.js, Python, Next.js, Tailwind CSS<br></br>
          <b>Frameworks:</b>  Pandas, Numpy, TensorFlow, PyTorch<br></br>
          <b>Databases:</b>  MySQL, MongoDB<br></br>
          <b>Platforms:</b>  Git, GitHub, Visual Studio Code, Eclipse, Jupyter Notebook<br></br><br></br>

            Currently, I’m pursuing my M.Tech in Computer Science with a focus on Artificial Intelligence while building AI-powered applications and full-stack solutions.<br></br> <br></br>
            I’m continuously enhancing my expertise in Data Structures & Algorithms, Large Language Models (LLMs), AI Agents, and modern software engineering practices. Passionate about continuous learning, clean code, and innovation, I strive to create intelligent technologies that solve real-world problems.<br></br>
        </motion.p>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
        <Image src={astronaut} alt="astronaut" className="absolute z-[-1] h-80 -right-20 animation top-28" />
      </div>

      <div className='mt-20 flex-wrap justify-center gap-10 hidden md:flex'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
