import React from 'react';
import MainNews from './MainNews';
import SideNews from './SideNews';

function ContanierNews() {
  return (
    <section role="mainMenu" className='grid desktop:grid-cols-7 gap-8   '>
        <div className='desktop:col-span-5 '>
        <MainNews/>
        </div>
        <div className='desktop:col-span-2 border'>
        <SideNews/>
        </div>
    </section>
  )
}

export default ContanierNews