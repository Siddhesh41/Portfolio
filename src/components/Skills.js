import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name,x,y}) =>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{scale:1.25}}
            initial = {{x:0,y:0}}
            whileInView = {{x:x , y:y}}
            transition = {{duration:1}}
            > 
                {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='mb-20 font-bold text-7xl mt-40 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
            whileHover={{scale:1.05}}
            >
               SKILLS
            </motion.div>
            <Skill name="CSS" x="-12vw" y="-11vw"/> 
            <Skill name="HTML" x="-14vw" y="15vw"/> 
            <Skill name="JavaScript" x="-32vw" y="9vw"/> 
            <Skill name="React" x="-41vw" y="-4vw"/> 
            <Skill name="DSA" x="14vw" y="-16vw"/> 
            <Skill name="CPP" x="10vw" y="12vw"/> 
            <Skill name="C" x="12vw" y="-5vw"/> 
            <Skill name="python" x="34vw" y="-2vw"/> 
            <Skill name="TailWindCSS" x="-18vw" y="-25vw"/> 
            <Skill name="BootStrap" x="34vw" y="-16vw"/> 
            <Skill name="OOPs" x="22vw" y="23vw"/> 
        </div>
    </>
  )
}

export default Skills