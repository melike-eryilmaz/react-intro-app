import CategoryList from "./CategoryList";
import Navigation from "./Navigation";
import ProductList from "./ProductList";
import { Container,Row ,Col} from "reactstrap";
function App() {
  let productInfo = {title:"Product List"};
  let categoryInfo = {title:"Category List",content:"Category content"};
  let navigationInfo = {title:"Navigation Component"};
  return (
    <div>
      <Container>
        <Row>
          <Navigation info={navigationInfo}></Navigation>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}></CategoryList>
          </Col>
          <Col xs ="9">
          <ProductList info={productInfo}></ProductList>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
