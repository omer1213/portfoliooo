import React from 'react'
import styles from './project.module.css'
import Image from 'next/image'

function Project() {
    return (
        <>

            <div className={` bg-[#181818] ${styles.projectHeight} text-gray-300 mt-1`} id='project' >
                <div className={`md:mx-26 xl:mx-44 flex flex-col md:flex-row md:justify-around `}>
                        <div className={`w-full md:w-1/2   lg:ml-16 xl:pl-16 text-center ${styles.pHeight} flex flex-col justify-around pt-4 mb-8 pb-20`} data-aos="fade-up">
                            <h1 className=" text-center text-4xl font-bold">Resturant Website</h1>
                            <span className='flex flex-row  mx-8 text-sm mt-4 justify-center pb-11'>
                                <div className={`w-14 h-6   ${styles.border}  text-center mr-2 hover:bg-slate-600`}>NextJs</div>
                                <div className={`w-24 h-6  ${styles.border}  text-centermr-2 hover:bg-slate-600`}>Tailwind CSS</div>
                                <div className={`w-32 h-6  ${styles.border}  text-center ml-1 hover:bg-slate-600`}>Frammer Motion</div>

                            </span>
                            <p className='mt-4 max-h-48 w-full text-start px-3'> My Next.js Portfolio is a dynamic website designed
                                to showcase my skills and projects. Powered by Next.js, it offers a seamless
                                and responsive user experience. Am not just limited to showcasing my own work;
                                I&rsquo;m  also passionate about designing web experiences for others, tailored to their unique
                                preferences and goals. Lets collaborate to bring your vision to life.
                                <br />
                                Tech Stack: Next.js, React, CSS3, HTML5
                            </p>
                        </div>
                
                    <div className={`${styles.marginImage} w-full  md:w-1/2 m-0 md:ml-1 md:mt-4 md:mb-4 flex justify-center`} data-aos="fade-down">

                        <Image src={'/projPic.png'} width={300} height={300} alt='project pic' />

                    </div>
                </div>
            </div>
            <div className={` bg-[#181818] ${styles.projectHeight} text-gray-300 mt-1`}  >
                <div className={`md:mx-26 xl:mx-44 flex flex-col md:flex-row md:justify-around `}>
                    <div className={`w-full md:w-1/2   lg:ml-16 xl:pl-16 text-center ${styles.pHeight} flex flex-col justify-around pt-4 mb-8 pb-20`} data-aos="fade-down">
                        <h1 className=" text-center text-4xl font-bold">Resturant Website</h1>
                        <span className='flex flex-row  mx-8 text-sm mt-4 justify-center pb-11'>
                            <div className={`w-14 h-6   ${styles.border}  text-center mr-2 hover:bg-slate-600`}>React</div>
                            <div className={`w-24 h-6  ${styles.border}  text-centermr-2 hover:bg-slate-600`}>Material UI</div>
                            <div className={`w-32 h-6  ${styles.border}  text-center ml-1 hover:bg-slate-600`}>Frammer Motion</div>

                        </span>
                        <p className='mt-4 max-h-48 w-full text-start px-3'> I designed and developed the Cheeseo Fast Food
                            Restaurant website using React, Material UI, and Framer Motion. This project showcases my skills in
                            creating a modern, interactive, and responsive web experience.

                        </p>
                    </div>
                    <div className={`${styles.marginImage} w-full  md:w-1/2 m-0 md:ml-1 md:mt-4 md:mb-4 flex justify-center`}data-aos="fade-up">

                        <Image src={'/pripic.png'} width={300} height={300} alt='project pic'/>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Project