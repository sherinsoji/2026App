import logo from "../Images/logo-t.png";
import Posts from "./Posts";
import SharePosts from "./SharePost";
import User from "./User";
import { Container, Row, Col } from "reactstrap"; 
const Home = () => {
  return (
    <>
    <Container>
      <Row>
        <Col md={3}>
          <User/>
        </Col>
        <Col md={9}>
          <SharePosts/>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
        </Col>
        <Col md={9}>
        <Posts/>
        </Col>
      </Row>
    </Container>
      
    </>
  );
};

export default Home;
