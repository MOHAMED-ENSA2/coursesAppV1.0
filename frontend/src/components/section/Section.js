import React,{useState, useEffect} from 'react'

import http from '../../services/http'
import configData from "../../config/configData.json"
import Head from './Head'
import "./Section.css"
import Loader from '../loader/Loader'

function Section({title, link, url , Component}) {
    const [data, setData] = useState()

    useEffect(() =>{
        const endPointURI = configData.apiEndpoint + url           
        http.get(endPointURI)
            .then(res => setData(res.data))
            .catch(error => console.error(error))            
    }, [])
    if(!data)  return <Loader/>
    return (
      <div className='section-container'>
          <div className='section'>
              <Head title={title} link = {link} />
              <div className='section--content'>
              {
                    data?.map((elm,index)=> {
                    return  <Component key = {index} data = {elm }  />
                    })
               }
              </div>
          </div>
      </div>
    )

}

export default Section