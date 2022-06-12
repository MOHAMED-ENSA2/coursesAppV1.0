import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer">
          <div className="top">
              <div className="top--items">
                <Link to = "/" className='link top--item'>معلومات قانونية</Link>
                <Link to = "/" className='link top--item'>شروط الإستخدام</Link>
                <Link to = "/" className='link top--item'>سياسة الخصوصية</Link>
              </div>
              <div className="top--items">
                <Link to = "/" className='link top--item'>الرئيسية </Link>
                <Link to = "/categories" className='link top--item'>القوائم</Link>
                <Link to = "/" className='link top--item'> التواصل </Link>
              </div>
              <div className="socialmedia">
                <div className="media"><i className="fab fa-facebook"></i></div>
                <div className="media"><i className="fab fa-instagram"></i>	</div>
                <div className="media"><i className="fab fa-twitter"></i></div>
                <div className="media"><i className="fab fa-youtube"></i></div>
            </div>
          </div>
          <div className="down">
                  <span>جميع الحقوق محفوظة لموقع تحميل 2022</span>  <i className="fas fa-copyright fa-xs"></i>
          </div>
        </div>
    </div>
  )
}

export default Footer