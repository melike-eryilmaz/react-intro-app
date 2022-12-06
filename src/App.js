import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navigation from "./Navigation";
import ProductList from "./ProductList";
import { Container,Row ,Col} from "reactstrap";

class App extends Component {
  /**
   * React da tek yönlü data aktarımı olduğu için değişen kategoriyi productlist componentede aktarmak için
   * changecategory func 'i buraya taşıdık ve bunu yapabilmek için functional yapıdan class yapıya çevirdik.
   */
  state = {
    currentCategory:""
  };
  changeCategory = (category)=>{
    this.setState({currentCategory:category.categoryName})
  }
  render() {
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
              <CategoryList info={categoryInfo} changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></CategoryList>
            </Col>
            <Col xs ="9">
            <ProductList info={productInfo} currentCategory={this.state.currentCategory}></ProductList>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
/**
 * 
 * function App() {
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
 * @returns 
 */

