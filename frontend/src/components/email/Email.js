import React from "react"

import './Email.css'

function Email(){

    return(
        <div className="email-container"  id = "contact">
            <div className="email">
                <h3>
                    قم بتسجيل بريدك الإلكتروني للتوصل بكل جديد
                </h3>
                <div className='email--subscribe'>
                    <input type="text" className='input' placeholder='سجل بريدك للتوصل بكل جديد'/>
                    <button className='btn btn_sample btn_raduis'>
                        إشترك   
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Email 