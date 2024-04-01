import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
    const{page,handlePageChange,totalPages}=useContext(AppContext);
  return (
    <div className='w-full border   bg-white fixed bottom-0  '>
         <div className='flex justify-center items-center gap-5 py-2 px-3'>
            { page > 1&&
                (<button className='bg-black text-white border border-black py-2 px-3 rounded-full font-bold '  onClick={()=>handlePageChange(page-1)}>Previous</button>)
            }

            { page < totalPages &&
               ( <button className='bg-black text-white border border-black py-2 px-5 rounded-full font-bold    ' onClick={()=>handlePageChange(page+1)}>Next</button>)
            }
            
             <p>Page {page} of {totalPages}</p>

         </div>
    </div>
  )
}

export default Pagination