import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import { Outlet  } from 'react-router-dom'
const UserLayout = () => {
  return (
    <div>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
 
export default UserLayout