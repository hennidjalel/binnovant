import Button from "../../components/button/Button"
import global from '../../../assets/icons/global.svg'
import star from '../../../assets/icons/star.svg'
import flech from '../../../assets/icons/flech.svg'
import Group from '../../../assets/icons/Group.svg'

const MainContent = () => {
    return (
        <section className="mainContainer h-[100%] z-10 pt-10  pb-10 text-center flex flex-col justify-center items-center overflow-hidden">
            <div className="container mx-auto  text-white uppercase space-y-16 flex items-center justify-center flex-col"
                data-aos="fade-up" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay="300"
            >
                <h1 className=" text-3xl font-semibold leading-10 uppercase p-2 max-w-[450px] md:max-w-[750px] md:text-6xl lg:max-w-[850px] lg:text-7xl lg:leading-[5rem] pt-8 ">
                    bringing <img src={global} alt="" className="inline-block lg:w-[6%] xl:w-[6%]" /> Brands To life <img src={star} alt="" className="inline-block lg:w-[6%] xl:w-[6%]" /> with strategy And  <img src={flech} alt="" className="inline-block  lg:w-[4%]" /> Design  <img src={Group} alt="" className="inline-block lg:w-[7%]" />
                </h1>

                <div className="z-10">
                    <Button > Get Started</Button>
                </div>
            </div>
        </section>
    )
}

export default MainContent