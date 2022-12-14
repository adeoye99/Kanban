import React , {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import SidebarContext from '../Context/Sidebar/SidebarContext';

function MenuLink ({to , title  ,onClick}){
  return (

 <NavLink
  to = {to}
  // className = "flex flex-row text-red-100 border-1 border-white "
  className={({ isActive }) =>
      `flex flex-row text-red rounded-r-3xl border-1 border-white mt-4 text-white mr-[50px] pl-4 h-[50px] items-center   ${isActive && "bg-slate-blue font-[600]" }`
    }
    onClick = {onClick}
 >
  { title }

 </NavLink>
  )
}
function Sidebar(){
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <nav 
    className={`fixed pt-10 ${
      sidebarOpen ? "left-0 right-[150px]" : "left-[-300px]"
    } md:left-0 md:right-[72%] lg:right-[83.5%]  md:h-screen shadow-lg md:shadow-none bg-gray-500 duration-300 z-40`}
    // className='flex flex-col bg-gray-500 h-screen  border-[1px] border-gray-500'
    >
      <p className='text-white text-left mt-[0px] ml-[50px] text-[28px]'>
        Kanban
      </p>
      <div className='border-1 my-7 border-red-100' >
        <div>
          <p className='text-xs text-left ml-[30px] text-gray-300'>ALL BOARDS (8)</p>
        </div>
        <MenuLink 
           to = "/platformlaunch"
           title = "Platform launch"
           onClick = {toggleSidebar}
          />
         <MenuLink 
           to = "/marketinglaunch"
           title = "Marketing Launch"
           onClick = {toggleSidebar}
          />
          <MenuLink 
           to = "/roadmap"
           title = "Road Map"
           onClick = {toggleSidebar}
          />
         {/* <MenuLink 
           to = "/platformlaunch"
           title = "Platform launch"
          /> */}

      </div>
      
       
     
    </nav>
  );
}

export default Sidebar;
