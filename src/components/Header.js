import React, {useState} from 'react'
import './styles/Header.scss';
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { Link } from "react-scroll";
import CallIcon from '@mui/icons-material/Call';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// import { Link } from "react-router-dom"


export default function Header() {
  const [active, setsetactive] = useState(false);
  
  const showMenu = () => {
    setsetactive(!active);
  }


  return (
     <div className="header" id='header'>
      <div className="header__logo">
        <h1>My Portfolio</h1>
      </div>
      <nav className={active ? 'navbar active' : 'navbar'}>
        <ul>
          <div className="closed">
           <GrClose className='close' onClick={showMenu}/>
          </div>
           <li><Link activeClass='active' to="main" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
           <li><Link activeClass='active' to="about" spy={true} smooth={true} offset={-55} duration={500}>About Me</Link></li>
           <li><Link activeClass='active' to="works" spy={true} smooth={true} offset={-40} duration={500}>Portfolio</Link></li>
           <li><Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
        </ul>
      </nav>
        <p> <CallIcon/> 9267982865 </p>
        <button><Link href='tel:9267982865'> <ChatBubbleOutlineIcon/> Contact Me</Link></button>
      <div className="changer">
       <GiHamburgerMenu className='menu' onClick={showMenu}/>
      </div>
     </div>
  )
} 

