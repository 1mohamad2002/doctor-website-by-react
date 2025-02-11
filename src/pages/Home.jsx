import React from 'react'
import Header from '../components/Header'
import SpeacialtyMenu from '../components/SpeacialtyMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
     <Header/>
     <SpeacialtyMenu/>
     <TopDoctors/>
     <Banner/>
    </div>
  )
}

export default Home
