import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/beyondTheCode.png"
import project2 from "../../public/images/projects/Portfolio.png"
import project3 from "../../public/images/projects/medicalSystem.jpg"

import {motion} from "framer-motion"
const FramerImage = motion(Image);


const FeatureProject = ({type,title,summary,img,link,github}) => {
    return(
        <article className='p-12 relative w-full rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
            <div className='absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark/90' />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg ' href={link} target="_blank">
                <FramerImage src={img} alt={title} className='w-full border-4 border-dark h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                ></FramerImage>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link className='w-10' href={github} target="_blank"> <GithubIcon/> </Link>
                    <Link className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-dark' href={link} target="_blank"> Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Siddhesh Shreeram Borse</title>
            <meta name="description" content="This is the about page" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className='!text-7xl mb-16' text="Imagination Trumps Knowledge!"/>

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeatureProject
                        title="Beyond The Code"
                        summary="A website which focused on visualizing different sorting algorithms & searching algorithms. Created an interactive visualizations using HTML, CSS, and JavaScript to demonstrate step-by-step animations of sorting algorithms like Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, and more."
                        link="/"
                        type="Project 1"
                        img={project1}
                        github="/"
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeatureProject
                        title="My Portfolio Website"
                        summary="Welcome to my online resume! Here you will find a comprehensive overview of my professional experience, skills, projects, achievements and qualifications."
                        link="/"
                        type="Project 2"
                        img={project2}
                        github="/"
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeatureProject
                        title="Human Healthcare & Services"
                        summary="Created a Centralised medical system that holds medical history of user which can be easily accessed by user using HTML , CSS , Javascript and Node-js as a Backend. The website will provide AI-ML based healthcare recommendation system with timely updated information."
                        link="/"
                        type="Project 3"
                        img={project3}
                        github="/"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}


export default projects