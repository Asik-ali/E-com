import React from 'react'
import img from "../images/video1.mp4"


function HeroSection() {
  return (
    <div>
      <video className='object-cover w-full h-96 lg:h-96' src={img} muted loop autoPlay type='video/mp4'></video>

      {/* <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" /> */}
    </div>
  )
}

export default HeroSection