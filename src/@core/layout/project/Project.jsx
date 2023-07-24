import { Project_Icon, Project_Desc } from '../../../config/globals'
import { ProjectData } from '../../data/data'


const Project = () => {
    return (
        <section className='bg-black h-full pt-8 pb-10'>
            <div className='container mx-auto p-4 space-y-2'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-3xl font-semibold text-white '>we create & <br /> <span className='text-textSecondary'>innovate</span> </h1>
                    <img src={Project_Icon} alt="" className='inline-block' />
                </div>
                <p className='text-white font-light text-sm'>{Project_Desc}</p>
                <div className='container mx-auto space-y-6'>
                    {
                        ProjectData.map((item, index) => (
                            <div className=' relative rounded-xl ' key={index}>
                                <img src={item.image} alt="" className='mx-auto object-cover rounded-xl' />
                                <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60 rounded-xl'></div>
                                <h2 className='absolute text-white bottom-2 p-4 text-2xl w-[40%]'>{item.subTitle}</h2>
                                <button className='btn-project cursor-pointer absolute top-5 right-5 border border-white p-3 rounded-lg text-lg text-white'>{item.title}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project