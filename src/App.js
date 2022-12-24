
import { Route, Routes } from "react-router-dom"
import Main from "./Pages/Main";

// import Sidebar from "./Layout/Sidebar";


function App(){
  return (
      <Routes>
          <Route path = "*" element ={<Main/>}/>
      </Routes>
  ) 
}

export default App;