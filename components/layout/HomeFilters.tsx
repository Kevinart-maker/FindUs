'use client'

import { CiSearch } from "react-icons/ci";
import Trending from './Trending';
import { services } from '@/data/data'
import { FaArrowRight } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoList } from "react-icons/io5";
import { useState } from 'react';

const service = services.map((item, index) => (
    <div key={index} className="flex flex-col md:flex-row md:bg-gray-200 md:p-2 md:rounded md:w-full items-center md:justify-start gap-2">
        <span className="bg-gray-200 md:bg-white text-blue-600 text-xl w-full md:w-fit rounded p-2 flex justify-center"><item.icon /></span>
        <span className="text-xs w-full">{item.name}</span>

        <span className="justify-self-end hidden md:flex"><FaArrowRight /></span>
    </div>
));

console.log(service)

const HomeFilters = () => {
    const [grid, setGrid] = useState<boolean>(false);
    
    return ( 
        <section>
            <div className="bg-blue-600 flex flex-col gap-4 items-center w-full justify-center px-4 pt-[3rem] pb-[2rem] rounded-br-lg rounded-bl-lg">
                <h1 className="text-white font-medium">What do you need?</h1>
                <div className="input flex items-center gap-[1rem] bg-white text-black rounded w-full md:w-[25rem] p-[0.6rem]">
                    <CiSearch />
                    <input type="search" placeholder="search services" className="outline-none w-full"/>
                </div>
            </div>

            <section className="flex flex-col md:flex-row w-full gap-4 md:px-[2rem] md:items-start mt-[3rem]">
                <div className="text-black flex md:flex-wrap gap-4 px-[2rem]">
                    {service}
                </div>

                <div className="w-full p-[1rem] rounded bg-gray-200 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h1 >Trending Services</h1>
                        <span className="flex gap-4">
                            <BsFillGrid3X3GapFill className={`${grid ? 'text-blue-600' : ''}`} onClick={() => setGrid(true)} />
                            <IoList className={`${grid ? '' : 'text-blue-600'}`} onClick={() => setGrid(false)}/>
                        </span>
                    </div>
                    <Trending grid={grid}/>
                </div>
            </section>
        </section>
     );
}
 
export default HomeFilters;