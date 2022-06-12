import http from "../services/http"
import configData from "../config/configData.json"


// constants 
const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING"
const GET_PRODUCTS_SUCCESS =  "GET_PRODUCTS_SUCCESS"
const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL"

// actions creators 

export const getProducts = () => (dispatch) => {
    dispatch({type : GET_PRODUCTS_LOADING}) ; 
   
    
    http.get(configData.apiEndpoint + "/products")
        .then(res => dispatch({type : GET_PRODUCTS_SUCCESS , payload : {products : res.data}}))
        .catch(error => dispatch({ type : GET_PRODUCTS_FAIL , payload : {error : error}}))
}

// reducer  

const reducer = (state = {loading : false , data : []} , action) => {
    switch(action.type){
        case GET_PRODUCTS_LOADING : 
            return {...state , loading : true}
        case GET_PRODUCTS_SUCCESS : 
            return {...state , loading : false , data : action.payload.products} 
        case GET_PRODUCTS_FAIL : 
            return {...state , loading : false , error : action.payload.error}
        default :
            return state 
    }
}

export default reducer 