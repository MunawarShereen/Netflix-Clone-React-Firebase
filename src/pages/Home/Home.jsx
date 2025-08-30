import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import cards_data from '../../assets/cards/Cards_data'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div className='home1'>
      <div className='page1'>
        <Navbar />
        <div className='hero'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJ9U_CEGbC7QtgcogO8XazF7KYLHkeRA18g&s' alt="" className='banner-img' />
          <div className='hero-caption'>
            <img src={hero_title} alt="" className='caption-img' />
            <p>Discover endless entertainment with unlimited movies,
              TV shows, and originals. Stream anywhere, anytime, and
              enjoy the freedom to cancel whenever you want.</p>

            <div className='hero-btn'>
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
          </div>
        </div>
      </div>

      <div className='page2'>
        <TitleCards title={"Popular of Netflix"} categroy={"popular"}/>
        <TitleCards title={"Trending Now"} categroy={"now_playing"}/>
        <TitleCards title={"Top Picks for You"} categroy={"top_rated"}/>
        <TitleCards title={"New Releases"} categroy={"upcoming"}/>
        

      </div>
      <Footer/>
    </div>
  )
}

export default Home