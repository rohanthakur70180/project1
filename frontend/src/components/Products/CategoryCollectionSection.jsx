import React from 'react'
import { Link } from 'react-router-dom'
import product1 from "../../assets/product1.jpg"
import grain from "../../assets/grain.jpg"
const CategoryCollectionSection = () => {
  return (<section className='py-6 px-4 lg:px-0'>
    <div className='container mx-auto flex flex-col md:flex-row gap-8'>
     {/* {Women's Collection}    */}
     <div className='relative flex-1'>
        <img 
        src={product1}
        alt=" FRUITS & VEGETABLE's Collection"
        className="w-full h-[700px] object-cover"
        />
            <div className='"absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'> 
                    FRUITS & VEGETABLE STORE 
                </h2>
                <Link 
                to="/collections/all?category=Fruits&category=Vegetables"


                className="text-gray-900 underline"
                >
                    Shop Now
                </Link>
            </div>
     </div>


     <div className='relative flex-1'>
        <img 
        src={grain}
        alt="Men's Collection"
        className="w-full h-[700px] object-cover"
        />
            <div className='"absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'> 
                    GRAIN STORE
                </h2>
                <Link 
                to="/collections/all?category=Grains"
                className="text-gray-900 underline"
                >
                    Shop Now
                </Link>

                </div>
                </div>
    </div>
  </section>
    
  )
}

export default CategoryCollectionSection