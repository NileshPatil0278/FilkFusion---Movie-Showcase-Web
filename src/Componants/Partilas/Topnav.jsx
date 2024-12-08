import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom'

const Topnav = () => {

  const [query, setquery] = useState("");

  console.log(query);



  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>

      <i class="text-zinc-400 text-2xl ri-search-eye-line"></i>

      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className='w-[50%] text-zinc-200 mx-10 text-x outline-none border-none bg-transparent' 
        type='text' 
        placeholder='search anything' 
      />
      
      {query.length > 0 && (
          <i onClick={()=> setquery("")} 
          class="text-zinc-400 text-2xl ri-close-line"></i>
      )}

      <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded'>

        <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>

          <img src="" alt="" />
          <span> Hello everyOne</span>

        </Link>

      </div>


    </div>
  )
}

export default Topnav