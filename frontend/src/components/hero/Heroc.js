import React from 'react'


import {FaDownload} from "react-icons/fa"
import {GiBookCover} from "react-icons/gi"
import {FaNewspaper} from 'react-icons/fa'
import {AiOutlineWindows} from 'react-icons/ai'
import "./Heroc.css"

function Heroc() {
  return (
    <div className='heroc-container'>
        <div className='heroc'>
            <div className='heroc--item'>
                <div className='heroc--icon'>
                <FaNewspaper/>              
                 </div>
                <div>دورات</div>
                <div className='heroc--number'>
                    +230
                </div>
            </div>
            <div className='heroc--item'>
                <div className='heroc--icon'>
                <GiBookCover/>
                </div>
                <div>كتب</div>
                <div className='heroc--number'>
                    +1200
                </div>
            </div>
            <div className='heroc--item'>
                <div  className='heroc--icon'>
                  <AiOutlineWindows/>
                </div>
                <div>برامج</div>
                <div className='heroc--number'>
                    +1560
                </div>
            </div>
            <div className='heroc--item'>
                <div className='heroc--icon'>
                <FaDownload/>
                </div>
                <div>تحميل</div>
                <div className='heroc--number'>
                    +100000
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heroc