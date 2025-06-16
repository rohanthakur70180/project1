import React from 'react'
import { Link } from 'react-router-dom'
import farm from "../../assets/farm.png"
const FeaturedCollection = () => {
  return <section className='py-20 px-4 lg:px-0'>
    <div className='comtainer mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50
    rounded-3xl '>
        {/* {Left Content} */}
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
        <h2 className='text-lg font-semibold text-gray-700 mb-2'>
            Convenience and Easy to trade
        </h2>
        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
        "Revolutionizing Crop Trade—One Click at a Time."
        </h2>
        <p className='text-lg text-gray-600 mb-6'>
        "An e-commerce platform connecting farmers and traders for seamless crop buying, selling, and transport."
        </p>
        <Link to="/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
        Shop Now
        </Link>
        </div>

        {/* {Right Content} */}
        <div className='lg:w-1/2'>
        <img src={farm} alt="Featured Collection"
          className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl'
        />
        </div>

    </div>
  </section>
}

export default FeaturedCollection