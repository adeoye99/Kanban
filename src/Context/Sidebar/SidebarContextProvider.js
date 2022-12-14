import React, { useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((opened) => !opened);
  };
  
  return(
    <SidebarContext.Provider value = {{ sidebarOpen, toggleSidebar }}>
      { children }
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;