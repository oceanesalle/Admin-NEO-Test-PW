import React, {useState} from 'react';
import "./Header.css";

import { Link } from "react-scroll"; 

export const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
        {menuOpened === false && mobile === true ? (
          <div
          style={{
            backgroundColor: 'var(--appColor)', 
            padding: '0.5rem', 
            borderRadius: "5px",
          }}

          onClick={() => setMenuOpened(true)}
          >
          </div>
        ) : (
        <ul className='header-menu'>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            activeClass="active"
            to='header'
            spy={true}
            smooth={true}
            > 
            Accueil 
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='Login'
            spy={true}
            smooth={true}
            > 
            Login
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='reservation'
            spy={true}
            smooth={true}
            > 
             Blog
            </Link>
          </li>
          
        </ul>
        )}
    </div>
  );
};
