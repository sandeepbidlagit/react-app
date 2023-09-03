// import logo from './logo.svg';
import "./App.scss";

import About from "./components/About";

import Header from "./components/Header";
import Main from "./components/Main";
import Works from "./components/Works";
import { Contact } from "./components/Contact";

function App() {


  return (
    <>
<Header/>

      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/section" element={<Section />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      
      

    <Main/>   
    <About/>   

    <Works/>   
    <Contact/>   
    </>
  );
}

export default App;
