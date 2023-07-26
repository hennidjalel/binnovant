import { About_Title, About_Star } from '../../../config/globals'
import './about.css'

import { aboutData } from '../../data/data'

// images 
import edit from '../../../assets/icons/edit.svg'
import film from "../../../assets/icons/film.svg";
import dataBase from "../../../assets/icons/dataBase.svg";
import penTool from "../../../assets/icons/penTool.svg";



const About = () => {
    return (
        <section className='bg-black h-full pt-8'>
            <div className='container mx-auto mb-10 p-4'>
                <h1 className='text-3xl font-semibold text-white uppercase lg:max-w-[700px] lg:text-5xl'>{About_Title} <img src={About_Star} alt="" className='inline-block' /> </h1>
            </div>

            {
                aboutData && aboutData.map((item, index) => (
                    <div className='text-white  md:hidden' key={index}>
                        <div className='h-[3px] w-full bg-lineColor'></div>
                        <div className='flex items-center justify-center p-4 gap-10 md' data-aos="fade-right" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay={item.delay}>
                            <img src={item.icon} alt="" />
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-semibold uppercase'>{item.title}</h1>
                                <p className='font-light text-sm'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='h-[3px] w-full bg-lineColor'></div>

            <div className='hidden about__content container mx-auto md:grid md:grid-cols-2 md:grid-rows-2 gap-0'>

                <div className='content text-white' >
                    <div className='flex items-center justify-evenly p-4 lg:pt-10 lg:pb-10 gap-10 md' data-aos="fade-right" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay='50'>
                        <img src={penTool} alt="" className='lg:w-[30%] xl:w-[20%]' />
                        <div className='flex flex-col justify-between md:gap-2 lg:gap-5'>
                            <h1 className='text-2xl font-semibold uppercase lg:text-3xl'>UX/UI Design</h1>
                            <p className='font-light text-sm max-w-[400px] xl:text-lg'>Website Design ? App Design ? We call all of it, so lets build your project from scratch !</p>
                        </div>

                    </div>
                    <div className='h-[3px] w-full bg-lineColor'></div>
                </div>
                <div className='text-white' >
                    <div className='flex items-center justify-evenly p-4 lg:pt-10 lg:pb-10 gap-10 md' data-aos="fade-right" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay='250'>
                        <img src={dataBase} alt="" className='lg:w-[30%] xl:w-[20%]' />
                        <div className='flex flex-col justify-between md:gap-2 lg:gap-5'>
                            <h1 className='text-2xl font-semibold uppercase lg:text-3xl'>development</h1>
                            <p className='font-light text-sm max-w-[400px] xl:text-lg'>Website Design ? App Design ? We call all of it, so lets build your project from scratch !</p>
                        </div>

                    </div>

                    <div className='h-[3px] w-full bg-lineColor'></div>
                </div>
                <div className='content text-white' >
                    <div className='flex items-center justify-evenly p-4 lg:pt-10 lg:pb-10 gap-10 md' data-aos="fade-right" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay='400'>
                        <img src={film} alt="" className='lg:w-[30%] xl:w-[20%]' />
                        <div className='flex flex-col justify-between md:gap-2 lg:gap-5'>
                            <h1 className='text-2xl font-semibold uppercase lg:text-3xl'>Video editing</h1>
                            <p className='font-light text-sm max-w-[400px] xl:text-lg'>Website Design ? App Design ? We call all of it, so lets build your project from scratch !</p>
                        </div>

                    </div>
                </div>
                <div className='text-white' >
                    <div className='flex items-center justify-evenly p-4 lg:pt-10 lg:pb-10 gap-10 md' data-aos="fade-right" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay='650'>
                        <img src={edit} alt="" className='lg:w-[30%] xl:w-[20%]' />
                        <div className='flex flex-col justify-between md:gap-2 lg:gap-5'>
                            <h1 className='text-2xl font-semibold uppercase lg:text-3xl'>copywriting</h1>
                            <p className='font-light text-sm max-w-[400px] xl:text-lg'>Website Design ? App Design ? We call all of it, so lets build your project from scratch !</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='h-[3px] w-full bg-lineColor'></div>

        </section>
    )
}

export default About