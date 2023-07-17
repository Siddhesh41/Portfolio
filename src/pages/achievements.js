import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ach1 from '../../public/images/achievements/gfg.png'
import ach2 from '../../public/images/achievements/codechef.png'
import ach3 from '../../public/images/achievements/dypatil.png'
import ach4 from '../../public/images/achievements/ait.png'
import {motion} from "framer-motion"

const FramerImage = motion(Image);

const Featured = ({img,title,time,summary,link})=>{
   return (
      <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl '>
         <div className='absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark/90' />
         <Link className='w-full inline-block  cursor-pointer overflow-hidden rounded-lg ' href={link} target="_blank">
                <FramerImage src={img} alt={title} className='w-full h-auto border-2 border-dark'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}></FramerImage>
         </Link>
         <Link href={link} target="_blank">
            <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
         </Link>
         <p className='text-sm mb-2'>{summary}</p>
         <span className='text-primary font-semibold'>{time}</span>
      </li>
   )
}

const achievements = () => {
  return (
    <>
      <Head>
            <title>Siddhesh Shreeram Borse</title>
            <meta name="description" content="This is the achievement page" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
         <Layout className='pt-16'>
            <AnimatedText className='!text-7xl mb-16' text="goal towards achievements !"/>
            <ul className='grid grid-cols-2 gap-16'>
                  <Featured
                  title ="350+ Problems on Geeks for Geeks"
                  summary = "As an accomplished programmer, I am proud to highlight my exceptional achievements on GeeksforGeeks. With a remarkable total coding score of 580+ and a proven track record of successfully solving over 350+ data structure and algorithm questions, I have demonstrated my proficiency and expertise in this field. These achievements reflect my dedication, strong problem-solving skills, and relentless pursuit of knowledge.."
                  time="July, 2023"
                  link="https://auth.geeksforgeeks.org/user/siddheshborse858/practice"
                  img ={ach1}
                  />

                  <Featured
                  title ="200+ Problems on CodeChef"
                  summary = "I am delighted to highlight my remarkable achievements on CodeChef, showcasing my expertise in data structures and algorithms. With a commendable total of 200+ questions solved and a strong maximum rating of 1658, I have consistently excelled in the competitive programming domain.  These achievements reflect my dedication, strong problem-solving skills, and relentless pursuit of knowledge."
                  time="July, 2023"
                  link="/"
                  img ={ach2}
                  />

                  <Featured
                  title ="Runner up in Football 7v7 Tournament"
                  summary = "The DY Patil Football 7v7 Tournament organized in Pune, featuring 96 teams, witnessed an intense competition where our team emerged as the runner-up. Throughout the tournament, this team showcased exceptional skill, strategy, and teamwork, defeating formidable opponents to reach the final match. Although falling short of clinching the championship, their impressive performance and resilience earned them recognition and respect from organizers, fellow participants, and fans alike. Being the runner-up in this highly competitive tournament is a testament to their dedication and serves as motivation for future success."
                  time="Feb, 2023"
                  link="https://www.linkedin.com/feed/update/urn:li:activity:7036018652785094657/"
                  img ={ach3}
                  />

                  <Featured
                  title ="Third Rank in Football 6v6 Tournament"
                  summary = "The AIT Football 6v6 Tournament held in Pune, featuring 60 teams, witnessed a fierce competition where our team excelled and secured the third rank. Throughout the tournament, this team displayed exceptional skill, strategic acumen, and remarkable teamwork, triumphing over strong adversaries to reach the top three. Their consistent performances and unwavering determination garnered recognition and admiration from event organizers, fellow participants, and supporters alike. Achieving the third rank in this highly competitive tournament is a testament to their hard work, perseverance, and commitment to excellence."
                  time="April, 2023"
                  link="https://www.linkedin.com/feed/update/urn:li:activity:7036018652785094657/"
                  img ={ach4}
                  />
            </ul>
         </Layout>
      </main>
    </>
  )
}

export default achievements