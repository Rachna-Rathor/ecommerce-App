import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'



function Home() {

  // search function
    const [search, setSearch] = useState(" ");
  return (
    <>

     <NavBar setSearch={setSearch}/>
     <Banner/>
     <Card search={search}/>
     <Footer/>
    </>
  )
}

export default Home