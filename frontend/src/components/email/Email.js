import React, {useState}  from "react"

import http from "../../services/http"
import configData from "../../config/configData.json"
import './Email.css'
import Alert from "../alert/Alert"


function Email(){
    const [email , setEmail] = useState("")
    const [isaved , setIsaved] = useState(false)
    const handleEmailSubmittion = () => {
        http.post(configData.apiEndpoint + '/generics/addEmail' , {email})
            .then(res => {
                setIsaved(true)
                localStorage.setItem("email" , email)
            })
            .catch(error => console.log(error))
    }
    if(isaved) return <Alert setIsaved = {setIsaved} message = "شكرا!   لقد تمت إضافة بريدك بنجاح" />
    else if(localStorage.getItem("email"))   return 
    else{

        return(
            <div className="email-container"  id = "contact">
                <div className="email">
                    <h3>
                        قم بتسجيل بريدك الإلكتروني للتوصل بكل جديد
                    </h3>
                    <div className='email--subscribe'>
                        <input 
                            type="email"
                            className='input' 
                            placeholder='سجل بريدك للتوصل بكل جديد'
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button 
                            className='btn btn_sample btn_raduis'
                            onClick={handleEmailSubmittion}
                        >
                            إشترك   
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Email 