import React, { Component } from 'react';
import {Container, ListGroup,ListGroupItem} from 'reactstrap'
class CategoryList extends Component {
    render() {
        return (
        <Container>
            <h1>{this.props.info.title}</h1>
            <ListGroup>
            <ListGroupItem>{this.props.info.content}</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        </Container>
        
        );
    }
}

export default CategoryList;