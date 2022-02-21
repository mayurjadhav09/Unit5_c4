import logo from './logo.svg';
import './App.css';
import { Mainpage } from './components/Mainpage';
import {DetailsData} from "./components/Details"

import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
                  <img src="https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="" />

      <Mainpage/>
      <Routes>
        {/* <Route path="/" element={<Mainpage/>}>Home</Route> */}
        <Route path="/details" element={<DetailsData/>}></Route>
      </Routes>
      {/* <DetailsData/> */}
    
    
    </div>
  );
}

export default App;
