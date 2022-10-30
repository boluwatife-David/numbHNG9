import React from "react";
import {BsSlack, BsGithub} from "react-icons/bs"
import {CiDark} from "react-icons/ci";
import {BiWorld} from "react-icons/bi"
import numb from "./numb.jpeg"

function App() {
  const [theme , setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  )
  function toggleTheme () {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    
  }
  React.useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.className = theme;
  }, [theme])
  return (
    <div className={`App ${theme}`}>
      <header className="header">
        <p><CiDark className="theme-btn" onClick={toggleTheme}/></p>
        <img src={numb} alt="profile-img" className="skeng"/>
        <p>NUMB.</p>
      </header>
        <main className="links">
        <a href="https://twitter.com/__numb_numb"><button type="button" >Twitter Link</button></a>
        <a href="https://training.zuri.team/"><button type="button">Zuri Team</button></a>
        <a href="https://books.zuri.team/"><button type="button">Zuri Books</button></a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<Numb.>"><button type="button">Python Books</button></a>
        <a href="https://background.zuri.team/"><button type="button">Background Check for Coders</button></a>
        <a href="https://books.zuri.team/design-rules"><button type="button">Design Books</button></a>
        <div className="sml-icons"><BsSlack className="footer-icon" /> <BsGithub className="footer-icon" /></div>
     </main>
     <hr />
     <footer className="footer">
      <div>
        <h4>Zuri Internship</h4>
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
