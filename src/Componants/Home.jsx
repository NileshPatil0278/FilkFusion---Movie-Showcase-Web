import React from 'react'
import Sidenav from './Partilas/Sidenav';
import Topnav from './Partilas/Topnav';

const Home = () => {
  document.title = "FilkFusion | Homepage";
  return (
    <>
      <Sidenav/>
      <div className='w-[80%] h-full'>
        <Topnav/>
      </div>
    </>
  )
}

export default Home