import { COMPANY_Name } from '../../../config/globals'
import mail from '../../../assets/footer/mail.svg'
import phone from '../../../assets/footer/phone.svg'
import linkedin from '../../../assets/footer/linkedin.svg'
import insta from '../../../assets/footer/instagram.svg'
import BtnSystem from '../../components/buttonSystem/BtnSystem'

const Footer = () => {
    return (
        <footer className='bg-black h-[100%] flex items-center '>
            <div className="container mx-auto p-4 flex items-center  justify-between">
                <div className="flex items-center justify-center gap-2 lg:hidden">
                    <img src={mail} alt="" className='border border-white p-2 rounded-full' />
                    <img src={phone} alt="" className='border border-white p-2 rounded-full' />
                </div>
                <div className='hidden  lg:flex items-center justify-center gap-4'>
                    <BtnSystem>Mail</BtnSystem>
                    <BtnSystem>Phone</BtnSystem>
                </div>
                <h1 className='text-3xl uppercase text-white font-bold'>{COMPANY_Name}</h1>
                <div className="flex items-center justify-center gap-2 lg:hidden">
                    <img src={linkedin} alt="" className='border border-white p-2 rounded-full' />
                    <img src={insta} alt="" className='border border-white p-2 rounded-full' />
                </div>
                <div className='hidden  lg:flex items-center justify-center gap-4'>
                    <BtnSystem>LinkedIn</BtnSystem>
                    <BtnSystem>Instagram</BtnSystem>
                </div>

            </div>
        </footer>
    )
}

export default Footer