import { Header_Desc, Header_Title } from "../../../config/globals"
import Button from "../../components/button/Button"
import star1 from '../../../assets/star1.svg'
import star2 from '../../../assets/star2.svg'
import './header.css'

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const Header = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="header relative h-[100%] text-center flex justify-center  items-center overflow-hidden pb-10 lg:text-left lg:flex-none lg:items-start lg:pt-14 lg:pb-14 xl:pt-10">

      <header className="  container mx-auto pt-10 lg:mb-10 text-white uppercase  flex items-center justify-center flex-col gap-5 lg:items-start">

        <div className="space-y-6 z-10  lg:p-4 lg:max-w-[800px] xl:max-w-[1200px]" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">

          <h1 className=" text-3xl font-semibold leading-10 md:text-6xl   xl:text-8xl ">{Header_Title}</h1>

          <p className="px-5 font-extralight text-sm md:px-14 md:text-xl lg:px-0 lg:p-4 lg:max-w-[600px] xl:max-w-[600px]">{Header_Desc}</p>

        </div>

        <div className="z-10 p-4 lg:inline-block lg:w-full relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200" >
          <Button className=' ' />
        </div>

      </header>



      <img src={star2} alt="" className="absolute  right-[-7.5rem] bottom-0 rotation lg:bottom-14" />
      <img src={star1} alt="" className="absolute  left-[-4.5rem] top-[-5%] rotation" />
    </section>
  )
}

export default Header