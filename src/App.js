import {BsSlack, BsGithub} from "react-icons/bs"
import {TbArrowBackUp} from "react-icons/tb";
import {GoPrimitiveDot} from "react-icons/go";
import {BiWorld} from "react-icons/bi"
import numb from "./numb.jpeg"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div><p>this path</p></div>} />
      <Route path="contact" element={<div>hello</div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
