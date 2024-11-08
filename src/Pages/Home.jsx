import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Gallery from "../Components/Gallery"

const Home = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='w-full pt-6 '>
          <Gallery/>
        </div>
      

    </div>
  )
}

export default Home