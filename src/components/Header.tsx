import { NavLink } from "react-router-dom";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ClearIcon from '@mui/icons-material/Clear';

type HeaderProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ isOpen, setIsOpen }: HeaderProps) => {

  // fallback para evitar undefined en desktop
  const open = isOpen ?? false;

  return (
    <header>
      <article className="altura-header">

        <NavLink to="/" onClick={() => setIsOpen?.(!open)}>
          <h1>JORDI MARIN</h1>
        </NavLink>

        <p onClick={() => setIsOpen?.(!open)}>
          {open ? <AlignHorizontalLeftIcon /> : <ClearIcon />}
        </p>

      </article>
    </header>
  );
};