import React, {useState , useEffect, useRef} from 'react'
import SearchBar from '../search/SearchBar'

import "./Hero.css"

function Hero() {


  return (
    <div className='hero-container'>
    <div className='hero'>
      <div className='hero-left'>
        <h1>
            أكبر مركز عربي لتحميل الدورات والبرامج المدفوعة مجانا
        </h1>
        <p>
        حمل آلاف الدورات التعليمية والكتب والبرامج مجانا وابدأ بنطوير مهاراتك . دورات تساوي آلاف الدولارات نقدمها لك مجانا بالإضافة إلى عدد كبير من الكتب والبرامج. 
        </p>
        <div className='hero--search'>
          <SearchBar />
        </div>
      </div>
      <div className='hero-right'>
          <img src="https://course-downloader.com/assets/theme/images/banners/main.webp" alt="" />
      </div>
    </div>  
  </div>
  )
}

export default Hero