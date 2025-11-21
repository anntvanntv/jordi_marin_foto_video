import { NavLink } from "react-router-dom";
import camara from '../assets/camara.png';



interface LeftNavProps {
  isOpen?: boolean; 
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}


export const LeftNav: React.FC<LeftNavProps> = ({ setIsOpen, isOpen }) => {
  
  const open = isOpen ?? false;

  return (
   
        <div className="nav-left" onClick={() => {setIsOpen?.(open)}}>
          <div className='marco-foto' style={{width: "73px", height: "65px"}}>
                <img src={camara} style={{width: "100%"}}  alt="foto_fotocamara" />
            </div>
              <h1>WORKS</h1>
              <ul>
              <li>
              <NavLink to="/photo/report">report</NavLink>
                </li>
                <li>
                  <NavLink to="/photo/editorial">editorial</NavLink>
                </li>
                <li>
                  <NavLink to="/photo/fashion">fashion</NavLink>
                </li>
              </ul>
              <h1>PERSONAL</h1>
              <ul>
                <li>
                    <NavLink to="/photo/travel">travel</NavLink>
                </li>
              </ul>
        </div>
   
  )
};
