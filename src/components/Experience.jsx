'use client'
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { experiences } from "../constants/constants"
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

const ExperienceCard = ({ index, title, company_name, icon, iconBg, date, points }) => (
  <Tilt className='xs:w-[350px] w-full'
    glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
    tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[300px] flex flex-col justify-between'
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{title}</h3>
          <p className='text-secondary text-[18px] font-semibold mt-2'>{company_name}</p>
          <div className='w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center mt-3'>
            <span className='text-white font-bold text-lg'>J</span>
          </div>
        </div>
        <div className='mt-4'>
          <p className='text-[#915EFF] text-[16px] font-bold'>{date}</p>
          <ul className='mt-3 list-disc ml-5 space-y-2'>
            {points.map((point, index) => (
              <li key={`experience-point-${index}`} className='text-gray-300 text-[14px] pl-1'>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Experience = () => {
  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Experience</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Professional Journey.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          My professional experience includes hands-on work in Java web development and AI integration, providing me with practical skills in enterprise-level development and emerging technologies.
        </motion.p>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.title} index={index} {...experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");