import {Component} from "react"

class Products extends Component {
    state = null
    render() {
        const products_list = this.props.products
        const to_render = products_list.map(product => {
            return(
                <div className="product" key={product.id}>
                    <p>Name is: {product.name}</p>
                    <p>Price is: ${product.price}</p>
                    <p>In Stock is: {product.in_stock.toString()}</p>
                    <hr/>
                </div>
            );}
        )
        console.log(products_list)
        return(
            <div className="products_list">
                { to_render }
            </div>
        )
    }
}

export default Products;
