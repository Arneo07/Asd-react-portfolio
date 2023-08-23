import { AboutMe } from "./Comp/AboutMe";
import { Contact } from "./Comp/Contact";
import { Experience } from "./Comp/Experience";
import {Home}  from "./Comp/Home";
import Navbar from "./Comp/Navbar";
import { Portf } from "./Comp/Portf";
import { SocialLinks } from "./Comp/SocialLinks";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/><br/>
      <Home/>
      <AboutMe/>
      <Portf/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
