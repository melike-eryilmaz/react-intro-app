import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
               <h1> {this.props.info.title}</h1>
            </div>
        );
    }
}

export default ProductList;