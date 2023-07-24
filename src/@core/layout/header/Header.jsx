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
    <section className="header relative h-[80vh] text-center flex flex-col justify-center items-center overflow-hidden">
      <div className="container mx-auto  text-white uppercase space-y-20 flex items-center justify-center flex-col">
        <div className="space-y-6" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
          <h1 className=" text-3xl font-bold leading-10">{Header_Title}</h1>
          <p className="">{Header_Desc}</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200" >
          <Button className='flex items-center justify-center' />
        </div>
      </div>
      <img src={star2} alt="" className="absolute right-[-7.5rem] bottom-0 rotation" />
      <img src={star1} alt="" className="absolute left-[-4.5rem] top-[-5%] rotation" />
    </section>
  )
}

export default Header