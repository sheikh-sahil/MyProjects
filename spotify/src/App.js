
import Songs from "./Songs"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Savelist from "./Savelist";
import Login from "./Login.js";

function App()
{
    return<div>
     
     

     <BrowserRouter>
      <Routes>
        <Route path="/Songs"   element={<Songs/>}/>
        <Route path="/Savelist"    element={<Savelist/>}/>
        <Route path="/"      element={<Login/>}/>

      </Routes>

     </BrowserRouter>

    </div>
}
export default App;