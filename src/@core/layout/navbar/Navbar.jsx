// import { COMPANY_Name } from "../../../config/globals"
import { COMPANY_LOGO } from "../../../config/globals"

import { AnimatePresence, motion } from 'framer-motion';


import { useState } from "react";

import './nav.scss'

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const [isActive, setIsActive] = useState(false)


    return (
        <nav className="navbar h-[10vh]  bg-primary overflow-hidden">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="/" className=""> <img src={COMPANY_LOGO} alt="" /></a>
                <div className='burger md:hidden' onClick={() => setIsActive(!isActive)}>
                    <div className="p-2 rounded-[10%] z-50 bg-white text-primary">{!isOpen ?
                        <svg
                            className='h-8 w-8 z-50 cursor-pointer'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        :
                        <svg
                            className={`h-8 w-8 z-50 cursor-pointer`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            onClick={() => setIsOpen(!isOpen)}

                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    }
                    </div>
                </div>
                <AnimatePresence>{
                    isActive &&
                    <motion.ul className='mobile-menu md:hidden'
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: "Inertia", ease: 'easeInOut' }}
                    >
                        <li> <a href='/' >Home</a> </li>
                        <li> <a href='#services' >Services</a> </li>
                        <li> <a href='#projects' >Projects</a> </li>
                        <li> <a href='#pricing' >Pricing</a> </li>
                    </motion.ul>
                }</AnimatePresence>
            </div>

        </nav>
    )
}

export default Navbar