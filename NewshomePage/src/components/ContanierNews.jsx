import React from 'react';
import MainNews from './MainNews';
import SideNews from './SideNews';

function ContanierNews() {
  return (
    <section role="mainMenu" className='grid desktop:grid-cols-12 gap-5  '>
        <div className='desktop:col-span-8 '>
        <MainNews/>
        </div>
        <div className='desktop:col-span-4 '>
        <SideNews/>
        </div>
    </section>
  )
}

export default ContanierNews