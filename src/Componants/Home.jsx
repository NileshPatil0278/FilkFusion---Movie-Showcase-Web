import React from 'react'
import Sidenav from './Partilas/Sidenav';

const Home = () => {
  document.title = "FilkFusion | Homepage";
  return (
    <>
      <Sidenav/>
      <div className='w-[80%] h-full'></div>
    </>
  )
}

export default Home