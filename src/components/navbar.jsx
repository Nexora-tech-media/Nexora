import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const  Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        <div className="sticky top-0 bg-white h-14 font-primary py-2.5 flex items-center dark:bg-black">
            <div className='mr-auto lg:pl-10 pl-5 dark:hidden'>
                <img src="src/assets/logos/wordmark/blue.svg" className="h-10 lg:hidden"/>
                <img src="src\assets\logos\wordmark\blue_transparent_bg.svg" className="h-20 hidden lg:block"/>
            </div>
            <div className='mr-auto lg:pl-10 pl-5 hidden dark:block'>
                <img src="src/assets/logos/wordmark/saffron.svg" className="h-10 lg:hidden"/>
                <img src="src\assets\logos\wordmark\saffron_transparent_bg.svg" className="h-20 hidden lg:block"/>
            </div>

            <div className='hidden lg:block ml-auto lg:flex pr-10 items-center'>
                <ul className='text-blackparagraph-lg flex gap-10 pr-10 cursor-pointer'>
                    <li className='dark:text-white hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">Home</a></li>
                    <li className='dark:text-white hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">Services</a></li>
                    <li className='dark:text-white hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">Products</a></li>
                    <li className='dark:text-white hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">About</a></li>
                </ul>
            </div>

            <div className='relative lg:hidden w-[30vh] flex justify-end'>
                <button className='text-black paragraph-md pr-5 dark:text-white hover:text-primary-500 dark:hover:text-Secondary-500 transition-all duration-200 ease-in-out'
                onClick={() => setIsNavOpen(!isNavOpen)}>
                    {isNavOpen === false ? <FaBars /> : <IoClose />}
                </button>

                <div className={`rounded-md absolute h-[100vh] bg-white w-full top-5 transform transition-transform ${isNavOpen ? "opacity-100" : "opacity-0"} dark:bg-black`} 
                style={{transition: "transform 0.3s ease-in, opacity 0.3s ease-in"}}>
                    <ul className='flex flex-col items-center justify-center pt-4 md:paragraph-lg gap-12'>
                        <li className='text-black hover:text-primary-500 dark:hover:text-Secondary-500 transition-colors duration-00 ease-in-out dark:text-white'><a href="#">Home</a></li>
                        <li className='text-black hover:text-primary-500 dark:hover:text-Secondary-500 transition-colors duration-200 ease-in-out dark:text-white'><a href="#">Services</a></li>
                        <li className='text-black hover:text-primary-500 dark:hover:text-Secondary-500 transition-colors duration-200 ease-in-out dark:text-white'><a href="#">Products</a></li>
                        <li className='text-black hover:text-primary-500 dark:hover:text-Secondary-500 transition-colors duration-200 ease-in-out dark:text-white'><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar