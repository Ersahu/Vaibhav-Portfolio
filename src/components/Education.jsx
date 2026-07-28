'use client'
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { education } from "../constants/constants"
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

const EducationCard = ({ index, title, institution, location, date, description }) => (
  <Tilt className='xs:w-[350px] w-full'
    glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
    tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex flex-col justify-between'
      ><div></div>
        <div>
          <h3 className='text-white text-[24px] font-bold'>{title}</h3>
          <p className='text-secondary text-[18px] font-semibold mt-2'>{institution}</p>
          <p className='text-gray-400 text-[16px] mt-1'>{location}</p>
        </div>
        <div className='mt-4'>
          <p className='text-[#915EFF] text-[16px] font-bold'>{date}</p>
          <p className='text-gray-300 text-[14px] mt-2'>{description}</p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Education = () => {
  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Education</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Academic Background.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
         My academic journey in Computer Science and Engineering has built a strong foundation in Artificial Intelligence, Machine Learning, and Software Engineering, complemented by hands-on experience in developing intelligent applications, full-stack solutions, and modern AI systems.
        </motion.p>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {education.map((edu, index) => (
          <EducationCard key={edu.title} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");