import {Component} from "react"

class Product extends Component {
    render() {
        console.log(this.props)
        /*return(
            <div className="product">
            <p>Name is: Labtop</p>
            <p>Price is: $50</p>
            <p>In Stock is: True</p>
            </div>
        )*/
    }
}

export default Product;
