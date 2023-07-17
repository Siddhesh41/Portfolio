import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Liicons from './Liicons'


const Details = ({position, company, companyLink,time, address , work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Liicons reference={ref} />
        <motion.div
        initial = {{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target={"_blank"}
            className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'> 
                {time} | {address}
            </span>
            <p className='font-medium w-full'> 
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start end","center start"]
    });
  return (
    <div className='my-60'>
        <h2 className='font-bold text-7xl mb-32 w-full text-center'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Frontend Web Developer"
                company="Dhansmruti"
                companyLink="https://siddhesh41.github.io/HiDhansmruti/"
                time="2023-Present"
                address="Pune, Maharashtra."
                work="Developed a responsive website for a build-construction company using HTML, CSS, JavaScript, and Bootstrap, ensuring seamless user experience across devices.
                Optimized website performance through CSS and HTML minification, image compression, lazy loading, and efficient bundling of CSS and JavaScript files."
                />
                <Details
                position="Technical Content Writer"
                company="Geeks for Geeks"
                companyLink="https://www.geeksforgeeks.org/"
                time="2022-Present"
                address="Pune, Maharashtra."
                work="Developing the articles which are based on Data Structure & Algorithms, C++ , Web Development and Object Oriented Programming. Improving the published articles by adding optimised Solution or by adding solution in different programming languages."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience