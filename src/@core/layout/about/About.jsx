import { About_Title, About_Star } from '../../../config/globals'


import { aboutData } from '../../data/data'



const About = () => {
    return (
        <section className='bg-black h-full pt-8'>
            <div className='container mx-auto p-4'>
                <h1 className='text-3xl font-semibold text-white '>{About_Title} <img src={About_Star} alt="" className='inline-block' /> </h1>
            </div>

            {
                aboutData.map((item, index) => (
                    <div className='text-white' key={index}>
                        <div className='h-[3px] w-full bg-lineColor'></div>
                        <div className='flex items-center justify-center p-4 gap-10' data-aos="fade-right" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay={item.delay}>
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

        </section>
    )
}

export default About