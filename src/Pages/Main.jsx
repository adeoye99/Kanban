import React from 'react'
import Sidebar from '../Layout/Sidebar'
import Header from '../Layout/Header'
import SidebarContextProvider from '../Context/Sidebar/SidebarContextProvider'
function Main() {
  return (
    <SidebarContextProvider>
       <div className='grid grid-cols-6 h-screen'>
        <div >
          <aside className=''>
             <Sidebar/>
          </aside>
        </div>
        <div className='col-span-5 bg-black'>      
          <main className='bg-black'>
              <Header />
          </main>
        </div>

    </div>
    </SidebarContextProvider>
   
  )
}

export default Main