import {Component} from "react"

class AddProduct extends Component {
    state = {
        name:"",
        in_stock:true,
        price:""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.addProduct(this.state);
    }
    render() {
        return(
            <div className="add_product">
                <form onSubmit={this.handleSubmit}>
                    Name: <input name="name" type="text" id="name"
                    onChange={this.handleChange}/><br/>
                    price: <input name="price" type="text" id="price"
                    onChange={this.handleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddProduct;
