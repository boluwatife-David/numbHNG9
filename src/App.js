import React from "react";
import {BsSlack, BsGithub} from "react-icons/bs"
import {TbArrowBackUp} from "react-icons/tb";
import {GoPrimitiveDot} from "react-icons/go";
import {BiWorld} from "react-icons/bi"
import numb from "./numb.jpeg"


function App() {
  // const [theme , setTheme] = React.useState(
  //   localStorage.getItem("theme") || "light"
  // )
  // function toggleTheme () {
  //   if (theme === "light") {
  //     setTheme("dark")
  //   } else {
  //     setTheme("light")
  //   }
    
  // }
  // React.useEffect(() => {
  //   localStorage.setItem("theme", theme)
  //   document.body.className = theme;
  // }, [theme])
  return (
    <div>
      <header className="header">
        <p alt="share"><TbArrowBackUp className="share-btn" /></p>
        <img id="profile__img" src={numb} alt="profile-img" className="skeng"/>
        <p id="slack">NUMB.</p>
      </header>
      <main className="links">
        <a id="twitter"href="https://twitter.com/__numb_numb">Twitter Link<br /><sub>NUMB's Twitter</sub></a>
        <a id="btn__zuri"href="https://training.zuri.team/">Zuri Team<br/><sub>Join the Zuri Team</sub></a>
        <a id="books"href="https://books.zuri.team/">Zuri Books<br/><sub>check out handpicked books to grow your tech career</sub></a>
        <a id="books__python"href="https://books.zuri.team/python-for-beginners?ref_id=<Numb.>">Python Books<br/><sub>check out these resources on Python</sub></a>
        <a id="pitch"href="https://background.zuri.team/">Background Check for Coders<br/><sub>Check about of our programmers here</sub></a>
        <a id="book__design"href="https://books.zuri.team/design-rules">Design Books<br/><sub>Check out new desing books offered by the Zuri Team</sub></a>
        <div className="sml-icons"><BsSlack className="footer-icon" />  <BsGithub className="footer-icon" /></div>
     </main>
     <hr />
     <footer className="footer">
      <div>
        <h4>Zuri <GoPrimitiveDot /> Internship</h4>
      </div>
      <div>
        <p>HNG Internship 9 Front-End Task</p>
      </div>
      <div className="ingressive-sect"> 
        <p className="world-icn"><BiWorld /></p>
        <h4 className="world">Ingressive <br/> For Good</h4>
      </div>
      </footer>
    </div>
  );
}

export default App;
