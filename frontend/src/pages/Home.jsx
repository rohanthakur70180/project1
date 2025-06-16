import React, { useEffect, useState } from 'react'
import Hero from '../components/Layout/Hero'
import CategoryCollectionSection from '../components/Products/CategoryCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'
import {useDispatch, useSelector} from "react-redux"
import axios from 'axios';
import { fetchProductsByFilters } from '../redux/slices/productSlice'; // adjust path as needed


const Home = () => {
  const dispatch = useDispatch();
  const {products,loading,error} = useSelector((state)=>state.products);
  const [bestSellerProduct,setBestSellerProduct]=useState(null);

  useEffect(()=>{
 
    dispatch(
      fetchProductsByFilters({
        sort: "rating",      // Or "rating:desc" if your backend requires direction
        order: "desc",
        limit:8,
      })
    )
    //Fetch best seller product
    const fetchBestSeller = async()=>{
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data)
      } catch (error) {
        console.error(error);
        
      }
    }
    fetchBestSeller()
  },[dispatch])
  return (
    <div>
    <Hero/>
    <CategoryCollectionSection/>
    <NewArrivals/>

    {/* {Best Seller} */}
    <h2 className='text-3xl text-center font-bold mb-4'>
        Best Seller
    </h2>
    {bestSellerProduct ?  (<ProductDetails productId={bestSellerProduct._id}/>):(
      <p className='text-center'>Loading best seller product ...</p>
    )}
    <div className='container mx-auto'>

  
    <h2 className='text-3xl text-center font-bold mb-4'>
      Top Picks by Traders
    </h2>
    <ProductGrid products={products} loading={loading} error={error}/>
    </div>
   
   <FeaturedCollection/>
   <FeaturesSection/>
    </div>

    
  )
}

export default Home