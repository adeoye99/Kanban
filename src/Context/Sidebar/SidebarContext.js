import React from 'react';
import { createContext } from "react"

const SidebarContext = createContext({
    sidebarOpen: false,
    toggleSidebar: () => {},
  });
  
  export default SidebarContext;