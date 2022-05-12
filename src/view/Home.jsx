import React from 'react'
import HomeSlider from '../components/Home/HomeSlider'
import Rooms from '../components/Home/Rooms'

function Home() {
  return (
    <div className="home-container">
      <HomeSlider />
      <Rooms />
    </div>
  )
}

export default Home