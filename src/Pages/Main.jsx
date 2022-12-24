import React, { Children } from 'react'
import Sidebar from '../Layout/Sidebar'
import Header from '../Layout/Header'
import SidebarContextProvider from '../Context/Sidebar/SidebarContextProvider'
import { Route, Routes } from "react-router-dom"
import { Platformlaunch } from './Platformlaunch'
import Marketinglaunch from './Marketinglaunch'
import RoadMap from './RoadMap'

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
              <Routes>
                 <Route path = "platformlaunch" element ={<Platformlaunch/>}/>
                 <Route path = "marketinglaunch" element ={<Marketinglaunch/>}/>
                 <Route path = "roadmap" element ={<RoadMap/>}/>  
              </Routes>
          </main>
        </div>

    </div>
    </SidebarContextProvider>
   
  )
}

export default Main