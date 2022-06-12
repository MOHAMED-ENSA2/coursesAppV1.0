import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import http from "../../services/http"
import configData from "../../config/configData.json"
import Loader from '../loader/Loader'

function withApiRequest(url , Component) {
    return function({params , ignoreParams, products , setProducts , filtredProducts , setPage}){
        const [data, setData] = useState()
        const {id} = useParams()

        useEffect(() =>{
            let endPointURI = ""

            if((id !== undefined ) && !ignoreParams){
                endPointURI = configData.apiEndpoint + url + '/' + id
            }else{
                endPointURI = configData.apiEndpoint + url 
            } 

            if(params) 
                endPointURI = configData.apiEndpoint + url + params

            http.get(endPointURI)
                .then(res => {
                    console.log(res.data) 
                    setData(res.data)
                })
                .catch(error => console.error(error))
        }, [])

        if(!data) return <Loader/>
        return (
            <Component 
                data = {data} 
                products = {products}
                setProducts = {setProducts}
                filtredProducts = {filtredProducts}
                setPage = {setPage}
             />
        )
    }
}



export default withApiRequest