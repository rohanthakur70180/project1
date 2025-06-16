import React from 'react'
import { FaFilter } from 'react-icons/fa6';
import FilterSidebar from '../components/Products/FilterSidebar';
import { useState,useRef,useEffect  } from 'react';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productSlice';
import { useSearchParams } from 'react-router-dom';



const CollectionPage = () => {
    const {collection} = useParams();
    const [searchParams]= useSearchParams();

    const dispatch =useDispatch(); 
    const {products,loading,error}= useSelector((state)=>state.products)
     const queryParams = Object.fromEntries([...searchParams]);
    
    const sidebarRef=useRef(null);
    const[isSidebarOpen,setIsSidebarOpen]=useState(false)
    useEffect(()=>{
      dispatch(fetchProductsByFilters({collection,...queryParams}));

    },[dispatch,collection,searchParams])

    const toggleSidebar=()=>{
       setIsSidebarOpen(!isSidebarOpen)
    };

     const handleClickOutside=(e)=>{
        if(sidebarRef.current&&!sidebarRef.current.contains(e.target)){
            setIsSidebarOpen(false);
        }
     }


    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOutside);

        return()=>{
        document.removeEventListener("mousedown",handleClickOutside)
        }
    },[])
    


  return (
    <div className='flex flex-col lg:flex-row'>
        {/* {Mobile Filter} */}
        <button
        onClick={toggleSidebar}
         className='lg:hidden border p-2 flex justify-center items-center'>
            <FaFilter className='mr-2'/>
        </button>

        {/* {Filter Sidebaar} */}
        <div ref={sidebarRef} 
        className={`${ isSidebarOpen ? "translate-x-0":"-translate-x-full" } fixed insert-y-0 z-50 left-0
        bg-white overflow-y-auto transition-transform duration-300
        lg:static lg:translate-x-0
        ` 
        }>
            <FilterSidebar/>Filters
        </div>
        <div className='flex-grow p-4'>
        <h2 className='text-2xl uppercase mb-4'>
        All Collection
        </h2> 
        {/* {Sort Options} */}
         <SortOptions/>
         {/* {Product Grid} */}
         <ProductGrid products={products} loading={loading} error={error}/>

        </div>
    </div>
  )
}

export default CollectionPage