import React, { useState } from 'react'
import BelowNews from '../components/BelowNews';
import ContanierNews from '../components/ContanierNews';
import Header from '../components/Header';

function Home() {

  const [open, setOpen] = useState(false)

  return (
  <div>
    <div className={`bg-opacity-50 bg-darkGrayishBlue fixed  h-screen w-full ${open ? "flex":"hidden"}`}></div>
    <div className='flex flex-col lg:p-8 p-2 gap-16 z-0'>
        <Header open={open} setOpen={setOpen}/>
        <ContanierNews/>
        <BelowNews/> 
    </div>
    </div>
  )
}

export default Home;