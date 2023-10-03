import {
  NavBar,
  Logo,
  BotonNav,
} from "../../utils/CustomTheme/CustomComponents";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Header = (): React.JSX.Element => {
  return (
    <>
      <NavBar>
        <Link to="/">
          <Logo src={logo} alt="Logotipo" />
        </Link>
        <NavLink to="/formvideo">
          {({ isActive }) => !isActive && <BotonNav>Nuevo Video</BotonNav>}
        </NavLink>
      </NavBar>
    </>
  );
};
