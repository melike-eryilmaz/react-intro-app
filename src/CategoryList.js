import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {
 //Eski versiyonlarda state ve props constructor içerisinde initialize ediliyordu.
 //Şimdi buna gerek yok.
 //Props bir component den diğerine data aktarmamızı sağlar.
 //State ise o component in datasını tutmamızı sağlar.
  state = {
    categories: [
      { categorId: 1, categoryName: "Beverages" },
      { categorId: 2, categoryName: "Foods" },
    ],
  };
  render() {
    return (
      <Container>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.categorId}>
              {category.categoryName}
            </ListGroupItem>
          ))}

          {/*
            <ListGroupItem>{this.props.info.content}</ListGroupItem>
             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
        </ListGroup>
      </Container>
    );
  }
}

export default CategoryList;
