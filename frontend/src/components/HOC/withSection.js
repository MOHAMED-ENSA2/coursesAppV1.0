import React, {useState,useEffect} from 'react'

import http from "../../services/http"
import configData from "../../config/configData.json"
import Loader from '../loader/Loader'

function withSection(url , Component , link , title , children) {
    return function(){
        const [data, setData] = useState()

        useEffect(() =>{
            setTimeout(() => {
                const endPointURI = configData.apiEndpoint + url 
              
                http.get(endPointURI)
                    .then(res => {
                        console.log(res.data) 
                        setData(res.data)
                    })
                    .catch(error => console.error(error))
                
            } , 4000)
        }, [])

        if(!data) return <Loader/>
        return (
            <Component data = {data} link = {link} title = {title} >
                {children}
            </Component>
        )
    }
}


export default withSection