import Button from "../../components/button/Button"
import global from '../../../assets/icons/global.svg'
import star from '../../../assets/icons/star.svg'
import flech from '../../../assets/icons/flech.svg'
import Group from '../../../assets/icons/Group.svg'

const Main = () => {
    return (
        <section className="main h-[50vh] text-center flex flex-col justify-center items-center overflow-hidden">
            <div className="container mx-auto  text-white uppercase space-y-16 flex items-center justify-center flex-col"
                data-aos="fade-up" data-aos-duration="6000" data-aos-easing="ease-in" data-aos-delay="300"
            >
                <h1 className=" text-3xl font-semibold leading-10 uppercase p-2">
                    bringing <img src={global} alt="" className="inline-block " /> Brands To life <img src={star} alt="" className="inline-block" /> with strategy And  <img src={flech} alt="" className="inline-block " /> Design  <img src={Group} alt="" className="inline-block" />
                </h1>
                <div>
                    <Button className='flex items-center justify-center' />
                </div>
            </div>
        </section>
    )
}

export default Main