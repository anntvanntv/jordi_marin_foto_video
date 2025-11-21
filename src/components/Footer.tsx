import { NavLink } from "react-router-dom";


interface FooterProps {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Footer: React.FC<FooterProps> = ({ isOpen, setIsOpen }) => {
  
    const open = isOpen ?? false;
  
  
    return (
    <footer>
        <div className="nav-list-footer" onClick={() => {setIsOpen?.(open)}}>
            <ul>
                <li>
                    <NavLink to="/">INICIO</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/bio">BIO</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
            </ul>
        </div>
    </footer>
  )
}