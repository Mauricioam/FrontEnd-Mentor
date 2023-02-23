import React from 'react';
import MainNews from './MainNews';
import SideNews from './SideNews';

function ContanierNews() {
  return (
    <section className='grid desktop:grid-cols-7 gap-8 min-h-full '>
        <div className='desktop:col-span-5 '>
        <MainNews/>
        </div>
        <div className='desktop:col-span-2 '>
        <SideNews/>
        </div>
    </section>
  )
}

export default ContanierNews