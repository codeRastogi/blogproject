import React, { useContext } from 'react'
import  { AppContext } from '../context/AppContext'

const Pagination = () => {

const{pageNumber, totalPages , handlePageChange} = useContext(AppContext)


return (
    <div>
        {pageNumber > 1 && 
        <button onClick={() => handlePageChange(pageNumber - 1)} value={"Prev"}>Previous</button>
        }
        {pageNumber < totalPages &&
        <button onClick={() => handlePageChange(pageNumber + 1)} value={"nex"}>Next</button>
        }
        <p>{pageNumber} of {totalPages}</p>
    </div>
  )
}

export default Pagination