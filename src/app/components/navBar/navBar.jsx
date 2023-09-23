"use client";
import React from 'react'

import Link from 'next/link'
import NavLinks from './navLinks'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileBar from './mobileBar';
import Image from 'next/image';
import { Dancing_Script} from 'next/font/google';

const dancingFont = Dancing_Script({
    weight: '400',
    subsets: ["latin"],
    display: "swap"
  })
 
function NavBar() {
   
    const navlinks = [
        {
            title: "Home",
            href: "#Home"
        },
        {
            title: "About",
            href: "#about"
        },
        {
            title: "Projects",
            href: "#project"
        },
        {
            title: "Contact",
            href: "#contact"
        }
    ]
    const [openNavBar, setOpenNavBar] = useState(false);

    return (<>
        <nav className=' fixed top-0 right-0 left-0 bg-[#121212]  z-10 bg-opacity-90  '>
            <div className='flex  justify-between  mx-5 p-2 font-sans'>
                <div className=' text-5xl md:text-6xl ' >
                    <Link className={`text-gray-300 hover:text-gray-600 rounded   ${dancingFont.className}`} href={'/'}>Omer</Link>
                </div>
                {
                   !openNavBar?  <button  onClick={() => setOpenNavBar(!openNavBar)}className='border-2 w-10 h-10 md:hidden mt-3 text-gray-300 hover:text-gray-600'><MenuIcon /></button>:
                   <button  onClick={() => setOpenNavBar(!openNavBar)} className='border-2  w-10 h-10 md:hidden mt-3 text-gray-300 hover:text-gray-600 '><CloseIcon /></button>
                }
              
                
                <div className='menu hidden  md:w-auto md:block'>
                    <ul className='flex flex-row p-2 space-x-6 cursor-pointer md:text-lg md:pt-3 '>
                        {
                            navlinks.map((link, index) => (
                                <li className='list-none pr-2 pl-2 pt-2' key={index}> <NavLinks href={link.href} title={link.title} /></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
                openNavBar?<MobileBar links={navlinks}/>:null
            }
        </nav>
        <hr />
        </>
    )
}

export default NavBar