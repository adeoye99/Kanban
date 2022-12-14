
import { Route, Routes } from "react-router-dom"
import Main from "./Pages/Main";
import { Platformlaunch } from "./Pages/Platformlaunch";
import Marketinglaunch from "./Pages/Marketinglaunch";
import RoadMap from "./Pages/RoadMap";


function App(){
  return (
      <Routes>
         <Route path = "/" element ={<Main/>}>
             <Route path = "platformlaunch" element ={<Platformlaunch/>}/>
             <Route path = "marketinglaunch" element ={<Marketinglaunch/>}/>
             <Route path = "roadmap" element ={<RoadMap/>}/>
         </Route>
         
      </Routes>
  ) 
}

export default App;