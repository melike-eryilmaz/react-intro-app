import CategoryList from "./CategoryList";
import Navigation from "./Navigation";
import ProductList from "./ProductList";
import { Container,Row ,Col} from "reactstrap";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navigation></Navigation>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList></CategoryList>
          </Col>
          <Col xs ="9">
          <ProductList></ProductList>
          </Col>

        </Row>
      </Container>
      
    </div>
  );
}

export default App;
