import { Container,Form,FormGroup,Input,Label,Button, Row,Col} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Container>
      <Form>
        <Row>
          <Col md={3}>
            <img src={logo}/>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
          <FormGroup>
          <Label for="email">
        Email
      </Label>
        <Input
          id="email"
          name="email"
          placeholder="Enter email..."
          type="email"
        />
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
          <FormGroup>
          <Label for="password">
        Password
      </Label>
        <Input
          id="password"
          name="password"
          placeholder="Enter password..."
          type="password"
        />
          </FormGroup>          
          </Col>
        </Row>
        <Row>
          <Col md={3}>
          <Button> Login </Button>
          </Col>
        </Row>
        </Form>
        <p className="smalltext">
              No Account? <Link to="/register">Sign Up now.</Link>
            </p>

      </Container>   
    </div>
  );
};

export default Login;
