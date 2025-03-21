'use client'

import Image from "next/image"
import Link from "next/link"
import { pirulen } from "@/ui/fonts"
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
    const [displayRegister, setDisplayRegister] = useState(false)<boolean>;
    
    return ( 
        <nav className="flex items-center relative justify-between gap-[2rem] px-8 p-4 text-white bg-blue-600 shadow-xl">
            <div className="flex items-center gap-2">
                <h1 className={`${pirulen.className} text-[2rem] font-bold`}>FindUs</h1>
            </div>

            <div className={`flex gap-[1rem] items-center absolute md:static bottom-[-7rem] p-6 rounded md:rounded-none shadow-black md:shadow-none bg-blue-600 bg-none flex-col md:flex-row ${displayRegister ? ' right-2' : 'right-[-1000px] hidden'}`}>
                <div><a href="#">Sign in</a> | <a href="#">Register</a></div>
                <button className="rounded bg-white text-blue-600 px-6 py-1">Get Hired</button>
            </div>
            <div onClick={()=> setDisplayRegister(!displayRegister)} className="text-2xl md:hidden"><CgProfile /></div>
            
        </nav>
     );
}
 
export default Navbar;