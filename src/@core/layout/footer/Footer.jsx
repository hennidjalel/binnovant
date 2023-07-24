import { COMPANY_Name } from '../../../config/globals'
import mail from '../../../assets/footer/mail.svg'
import phone from '../../../assets/footer/phone.svg'
import linkedin from '../../../assets/footer/linkedin.svg'
import insta from '../../../assets/footer/instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-black h-[10vh] flex items-center'>
            <div className="container mx-auto p-4 flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                    <img src={mail} alt="" className='border border-white p-2 rounded-full' />
                    <img src={phone} alt="" className='border border-white p-2 rounded-full' />
                </div>
                <h1 className='text-3xl uppercase text-white font-bold'>{COMPANY_Name}</h1>
                <div className="flex items-center justify-center gap-2">
                    <img src={linkedin} alt="" className='border border-white p-2 rounded-full' />
                    <img src={insta} alt="" className='border border-white p-2 rounded-full' />
                </div>
            </div>
        </footer>
    )
}

export default Footer