import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='px-5 bg-white dark:bg-black text-black dark:text-white'>
        <h1 className='text-center header-sm md:header-md lg:header-lg'>Footer</h1>
        <div className="">
            <div>
              <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg py-5 font-medium'>Our social media accounts:</h2>
              <div className='list-none flex lg:flex-row gap-5 flex-col paragraph-sm md:paragraph-md lg:paragraph-lg'>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="https://www.youtube.com/@Nexora.tech.mediaKE" className='flex items-center gap-2'>
                <FaYoutube />
                <p>@Nexora.tech.mediaKE</p>
              </a></li>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="https://www.tiktok.com/@nexora.tech.and.mediake" className='flex items-center gap-2'>
                <FaTiktok />
                <p>@nexora.tech.mediaKE</p>
              </a></li>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="https://www.instagram.com/nexora.tech.media/" className='flex items-center gap-2'>
                <FaInstagram />
                <p>@nexora.tech.media</p>
              </a></li>
              </div>
            </div>
            <div className="w-full gap-5 paragraph-sm md:paragraph-md lg:paragraph-lg">
              <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg py-5 font-medium'>Call or WhatsApp us at:</h2>
              <p className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'>+254 792 651 690</p>
            </div>
        </div>

        <p className='text-center text-black dark:text-white my-5 paragraph-sm md:paragraph-md lg:paragraph-lg'>@2025 NEXORA TECH AND MEDIA. ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer