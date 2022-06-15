import React, {useEffect, useState} from 'react'
import { useRef } from 'react'

import {MdKeyboardArrowDown} from "react-icons/md"
import withApiRequest from '../HOC/withApiRequest'
import "./Filter.css"

function Filter({data , setPage , setProducts, filtredProducts}) {
  const componentRef = useRef();

  const [showChoices ,setShowChoices ] = useState(
            { 
                type :  false , 
                categorie :  false , 
                year :  false , 
                lang :  false
            } 
    )

    useEffect(() => setPage(1) ,
                                [   showChoices.type ,
                                    showChoices.categorie ,
                                    showChoices.lang ,
                                    showChoices.year
                                ] 
    )

    useEffect(() => {
        document.addEventListener("click", handleOutClick);
        function handleOutClick(e) {
            if(componentRef && componentRef.current){
                const ref = componentRef.current
                if(!ref.contains(e.target)){
                    const showChoicesClone = {...showChoices} 
                    Object.keys(showChoicesClone).forEach(elm => showChoicesClone[elm] = false)
                    setShowChoices(showChoicesClone)
                }
            }
        }
        return () => document.removeEventListener("click", handleOutClick);
    }, []);

  const handleClick = (choice) => { 

    const showChoicesClone = {...showChoices} 
    Object.keys(showChoicesClone).forEach(elm => elm !== choice && (showChoicesClone[elm] = false) )
    showChoicesClone[choice] = !showChoicesClone[choice]
    setShowChoices(showChoicesClone)
  }

  const handleFiltering = (key , value) => {

    let productsClone = [...filtredProducts]
    
    if(key  === "categorie"){
        productsClone = filtredProducts.filter(elm =>  elm[key].filter(e => e["name"] === value).length > 0  )
        console.log(filtredProducts[0]["categorie"].filter(e => e.name === value))
    }
    else if(key === "year"){        
        productsClone = filtredProducts.filter(elm => elm[key].slice(0,4) === value )
    }
    else{
        productsClone = filtredProducts.filter(elm => elm[key] === value )        
    }

    setProducts(productsClone)
    

  }

  return (
    <div className='filter' ref = {componentRef} >
        <div className='filter--item'  onClick = {() => handleClick("type")}>
            <div>
                النوع
            </div>
            <MdKeyboardArrowDown/>
        </div>
        <div className='filter--item' onClick = {() => handleClick("categorie")}>
            <div >
                القسم
            </div>
            <MdKeyboardArrowDown/>
        </div>
        <div className='filter--item' onClick = {() => handleClick("year")}>
            <div >
               السنة
            </div>
            <MdKeyboardArrowDown/>
        </div>
        <div className='filter--item' onClick = {() => handleClick("lang")}>
            <div >
                اللغة
            </div>
            <MdKeyboardArrowDown/>
        </div>
        
        {   Object.keys(showChoices).map(item => {
            if(showChoices[item] === true){
                return (
                    <div className='filter--choices' key={item}>
                        { data[item]?.map((elm,index) => 
                            <div 
                                key={index}
                                className='filter--choice' 
                                onClick = {() => handleFiltering(item,elm)}    
                            >
                                {elm} 
                            </div> 
                        )}
                    </div>
                )
            }
            return 
        }) 
        }
        
    </div>
  )
}


const filter = (setData , filterValue) => {
    const {key , value} = filterValue
    setData(state => state.filter(elm => elm[key] = value ))
}

export default withApiRequest("/generics/getfilterItems",Filter)