import React from 'react'
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"

const Topbar = () => {
  return (
    <div className='bg-green-600 text-white text-sm py-2'>
      <div className='container mx-auto flex justify-between items-center py-3 py-4'>
        
        {/* Left: Social Icons */}
        <div className='hidden md:flex items-center space-x-3'>
          <a href="#" className='hover:text-gray-300'><TbBrandMeta className='w-5 h-5' /></a>
          <a href="#" className='hover:text-gray-300'><RiTwitterXLine className='w-4 h-4' /></a>
          <a href="#" className='hover:text-gray-300'><IoLogoInstagram className='w-5 h-5' /></a>
        </div>

        {/* Center: Shipping Message */}
        <div className='text-center hidden flex-grow'>
          We ship worldwide - Fast and reliable shipping!
        </div>

        {/* Right: Phone Number */}
        <div className='text-sm hidden md:block'>
          <a href="tel:+1234567890" className='hover:text-gray-300'>
            +1 (234) 567-890
          </a>
        </div>

      </div>
    </div>
  )
}

export default Topbar
