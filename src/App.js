import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Section2 from "./component/Section2";
import Productdetails from "./component/Productdetails";



function App(){
  return(
    <div>
<Section2/>
<Productdetails/>

    </div>
  )
}


export default App;