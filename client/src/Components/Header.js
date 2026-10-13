import { Container, Nav,NavItem, NavLink, Navbar} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../Images/logo-t.png";
const Header = () => {

  return (
    <Container>
      <Navbar className="my-link">
        <Nav>
          <NavItem>
            <Link to="/">
               <img src={logo}></img>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/" className="my-link">
               Home
            </Link>
          </NavItem> 
          <NavItem>
            <Link to="/profile" className="my-link">
              Profile
            </Link>
          </NavItem> 
          <NavItem>
            <Link to="#" className="my-link">
              Logout
            </Link>
          </NavItem>  
        </Nav>
      </Navbar>

    </Container>
  );
};

export default Header;
