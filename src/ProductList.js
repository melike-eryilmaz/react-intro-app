import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
               <h1> {this.props.info.title}-{this.props.currentCategory}</h1>
            </div>
        );
    }
}

export default ProductList;