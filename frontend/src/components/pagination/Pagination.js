import React from 'react'

import {MdFastRewind} from "react-icons/md"
import "./Pagination.css" 

function Pagination({nbPage, setPage}) {
  return (
    <div className='pagination'>

      { nbPage > 1 &&
        [...Array(nbPage+1).keys()].slice(1).map( (elm, index) => <div onClick={() => setPage(elm)}  key={index} className="pagination--item" >{elm}</div> )
      }
        
      { nbPage > 2 &&
        <>
          <div className="pagination--item">...</div>
          <div className="pagination--item">
              <MdFastRewind/>
          </div>
        </>
      }
    </div>
  )
}

export default Pagination