import { Button,Input,Form, Container,Row,Col } from "reactstrap";

const SharePosts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your thoughts..."
            type="textarea"
          /><br></br>
          <Button>PostIT</Button>
        </Col>
      </Row>
    </Container>
    
  );
};

export default SharePosts;
