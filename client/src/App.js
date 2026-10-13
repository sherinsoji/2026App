import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Col } from "reactstrap";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <>
    <Container>
      <Router>
      <Row>
        <Header/>
      </Row>
      <Row className="main">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path= "/profile" element={<Profile/>}></Route>
          <Route path = "/register" element={<Register/>}></Route>
        </Routes>
      </Row>
      <Row>
        <Footer/>
      </Row>
      </Router>
    </Container>
      
    </>
  );
};

export default App;
