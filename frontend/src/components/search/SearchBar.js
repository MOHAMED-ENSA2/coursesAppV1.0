import React, { useEffect, useRef, useState } from 'react'

import "./SearchBar.css"
function SearchBar() {
    const input = useRef(null)
    const [searchVAlue , setSearchValue] = useState("")
    
    useEffect(() => input.current.focus() , [])

    const handleEnterKeyPress = (e) => {
        if(e.key === "Enter" && searchVAlue !== "" )
             window.location.href = "/search?value=" + searchVAlue 
    }
    const handleSearch = () => window.location.href = "/search?value=" + searchVAlue 

    return (
    <div className='search'>
        <input 
            type="text" 
            ref = {input} 
            placeholder='إبحث عن دورات، كتب أو برامج '
            className='input' 
            onChange={e => setSearchValue(e.target.value)} 
            onKeyPress = {e => handleEnterKeyPress(e)}
        />
        <button 
            className='btn btn_sample btn_raduis'
            disabled = {searchVAlue === "" ? true : false }
            onClick = {handleSearch}
        >
            ابحث   
        </button>
    </div>
  )
}

export default SearchBar