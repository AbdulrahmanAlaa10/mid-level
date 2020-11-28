import React from "react";
import  ProductsApi from "../api/products";
import CartItem from "../CartIcon/CartItem";
import {connect} from "react-redux";
import {clearCart} from "../Actions/actions";
import { Link } from "react-router-dom";


class Cart extends React.Component{
    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };


    render(){
       
        return (
            <div>
                <h1 className="caart">Cart</h1>

                <div className="row">
                    {this.props.cartItems.map((item, index) => 
                        <div className={'col-3'} key={item.foood.id}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: {this.props.total} $
                </h3>
                <Link to="/Paid">
                    <button className="btn btn-primary btn-block" onClick={this.placeOrder}> Buy Now </button>
                </Link>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.foood.price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);