import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Liicons from './Liicons'


const Details = ({type,time,place,info}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Liicons reference={ref} />
        <motion.div
        initial = {{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75'> 
                {time} | {place}
            </span>
            <p className='font-medium w-full'> 
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start end","center start"]
    });
  return (
    <div className='my-60'>
        <h2 className='font-bold text-7xl mb-32 w-full text-center'>Education</h2>
        <div ref={ref} className=' w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type="Bachelor Of Technology In Computer Science"
                time="2020-2024"
                place="Mit Academy Of Enginnering (MIT)"
                info="Relevant courses included Data Structures and Algorithms, Computer Networks, Operating Systems & Object Oriented Programming."
                />
                <Details
                type="Intermediate (XII)"
                time="2019-2020"
                place="Gamodaya College, Nashik"
                info="Relevant courses included Physics, Chemistry and Mathematics."
                />
                <Details
                type="Matriculation (X)"
                time="2017-2018"
                place="Maratha Highschool"
                info="Relevant courses included Mathematics, Science, English, Social Science, Marathi and Sanskrit."                
                />
            </ul>
        </div>
    </div>
  )
}

export default Education