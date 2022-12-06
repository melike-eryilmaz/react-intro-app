import { response } from "express";
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
   // currentCategory:""
  };
  // changeCategory = (category)=>{
  //   this.setState({currentCategory:category.categoryName})
  // }

  // componentDidMount(){
  //   this.getCategories();
  // }
  // getCategories = ()=>{
  //   fetch("http://localhost:3000/categories")
  //   .then(response=>response.json())
  //   .then(data =>this.setState({categories:data}));
  // }
  render() {
    return (
      <Container>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={()=>this.props.changeCategory(category)} key={category.id}>
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
        <h4>{this.props.currentCategory}</h4>
      </Container>
    );
  }
}

export default CategoryList;
