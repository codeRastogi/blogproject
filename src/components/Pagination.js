import React, { useContext } from 'react'
import  { AppContext } from '../context/AppContext'

const Pagination = () => {

const{pageNumber, totalPages , handlePageChange} = useContext(AppContext)


return (
    <div className='flex flex-row justify-between items-center bg-gray-200 pb-1 pt-1 fixed bottom-0 w-screen'>
        <div className='flex justify-between w-[15%] ml-5 pt-1'>
        {pageNumber > 1 && 
        <button 
        className='w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        onClick={() => handlePageChange(pageNumber - 1)} value={"Prev"}>Previous</button>
        }
        {pageNumber < totalPages &&
        <button 
        className='w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        onClick={() => handlePageChange(pageNumber + 1)} value={"nex"}>Next</button>
        }
        </div>
        
        <p className='w-[50%] font-mono text-xl'>{pageNumber} of {totalPages}</p>
    </div>
  )
}

export default Pagination