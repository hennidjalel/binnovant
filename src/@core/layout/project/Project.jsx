//  swiper 
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import { Project_Icon, Project_Desc } from '../../../config/globals'
import { ProjectData } from '../../data/data'


const Project = () => {


    const breakpoints = {
        768: {
            slidesPerView: 2,
            initialSlide: 1,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2.5,
            initialSlide: 0,
            spaceBetween: 20
        },
        1536: {
            slidesPerView: 3.5,
            initialSlide: 1,
            spaceBetween: 20
        },
    }


    return (
        <section className='bg-black h-full pt-8 pb-10'>
            <div className='container mx-auto p-4 '>
                <div className='mb-10'>
                    <div className='flex items-center gap-5'>
                        <h1 className='font-semibold text-white text-3xl  lg:text-5xl xl:text-6xl'><span className='flex gap-4 uppercase'>we create & <img src={Project_Icon} alt="" className='hidden lg:block' /></span>
                            <br className='lg:hidden'/>
                            <div className='text-textSecondary flex items-center gap-4'><span className='uppercase'>innovate</span>  <p className='text-white font-extralight text-sm lg:max-w-[280px]'>{Project_Desc}</p></div> </h1>
                        <img src={Project_Icon} alt="" className='inline-block lg:hidden' />
                    </div>
                    <p className='text-white font-light text-sm lg:hidden'>{Project_Desc}</p>
                </div>
                <div className='container mx-auto flex flex-wrap items-center justify-center gap-4 md:hidden'>
                    {
                        ProjectData && ProjectData.map((item, index) => (
                            <div className=' relative rounded-xl h-[350px] md:h-[450px] mx-auto max-w-[350px]' key={index}>
                                <img src={item.image} alt="" className=' h-full object-cover rounded-xl' />
                                <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60 rounded-xl'></div>
                                <h2 className='absolute text-white bottom-2 p-4 text-2xl w-[40%]'>{item.subTitle}</h2>
                                <button className='btn-project cursor-pointer absolute top-5 right-5 border border-white p-3 rounded-lg text-lg text-white'>{item.title}</button>
                            </div>
                        ))
                    }
                </div>
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    breakpoints={breakpoints}

                >{ProjectData && ProjectData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='hidden md:block relative rounded-xl h-[350px] md:h-[450px] mx-auto max-w-[450px]' >
                            <img src={item.image} alt="" className=' h-full object-cover rounded-xl' />
                            <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60 rounded-xl'></div>
                            <h2 className='absolute text-white bottom-2 p-4 text-2xl w-[40%]'>{item.subTitle}</h2>
                            <button className='btn-project cursor-pointer absolute top-5 right-5 border border-white p-3 rounded-lg text-lg text-white'>{item.title}</button>
                        </div>
                    </SwiperSlide>
                ))
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default Project