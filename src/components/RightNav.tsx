import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'; 


interface RightNavProps {
  isOpen?: boolean; 
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RightNav: React.FC<RightNavProps> = ({ setIsOpen, isOpen }) => {
  
  const open = isOpen ?? false;
  
  return (
    

        <div className="nav-right" onClick={() => {setIsOpen?.(open)}}>
          <div className='marco-video' style={{width: "73px", height: "65px"}}>
                <img src={logo} style={{width: "100%"}}  alt="foto_videocamara" />
            </div>
            <h1>WORKS</h1>
            <ul>
                    <li>
                    <NavLink to="/video/report">report</NavLink>
                    </li>
                    <li>
                    <NavLink to="/video/editorial">editorial</NavLink>
                    </li>
                    <li>
                    <NavLink to="/video/fashion">fashion</NavLink>
                    </li>
            </ul>

            <h1>PERSONAL</h1>
              <ul>
                <li>
                    <NavLink to="/video/travel">travel</NavLink>
                </li>
              </ul>
        </div>
        
  )
}