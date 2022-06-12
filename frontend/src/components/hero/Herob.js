import React from 'react'
import {Link} from "react-router-dom"
import "./Herob.css"

function Herob() {
  return (
    <div className='herob-container'>
    <div className='herob'>
      <div className='herob--left'>
        <h2>
              أكبر مركز عربي لتحميل الدورات والبرامج المدفوعة مجانا
        </h2>
        <p>
        حمل آلاف الدورات التعليمية والكتب والبرامج مجانا وابدأ بنطوير مهاراتك . دورات نساوي آلاف الدولارات نقدمها لك مجانا بالإضافة إلى عدد كبير من الكتب والبرامج. 
        حمل آلاف الدورات التعليمية والكتب والبرامج مجانا وابدأ بنطوير مهاراتك . دورات نساوي آلاف الدولارات نقدمها لك مجانا بالإضافة إلى عدد كبير من الكتب والبرامج. 
        </p>
        <div className='herob--items'>
          <div className='herob--item'>
            <div className='item--icon'>
            <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className='item--text'>
                دورات تعليم البرمجة
            </div>
          </div>
          <div className='herob--item'>
            <div className='item--icon'>
            <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className='item--text'>
                دورات تعلم اللغات
            </div>
          </div>
          <div className='herob--item'>
            <div className='item--icon'>
            <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className='item--text'>
                دورات التجارة الإلكترونية
            </div>
          </div>
          <div className='herob--item'>
            <div className='item--icon'>
            <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className='item--text'>
                دورات UI/UX
            </div>
          </div>
          <div className='herob--item'>
            <div className='item--icon'>
            <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className='item--text'>
                دورات Freelancing
            </div>
          </div>
          <div className='herob--item'>
            <div className='item--icon'>
            <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className='item--text'>
              دورات مدفوعة مجانا
            </div>
          </div>
        </div>
        <div>
          <Link to = '/products' className='link' ><button className='btn herob--btn btn_red' >ابدأ التعلم</button></Link> 
          <Link to = '/products' className='link' ><button  className='btn herob--btn'>شاهد أكثر </button></Link>
        </div>
      </div>

      <img  className='herob--right' src="https://course-downloader.com/assets/theme/images/png/18.webp" alt="" />
    </div>
  </div>
  )
}

export default Herob