import React, { Component, Fragment } from "react";
import ProductsApi from "../api/products";
import "./Food.css";
import FoodItem from "./FoodItem";
import { connect } from "react-redux";
class Food extends Component {

  state = {
    Food: [],
  };

  componentDidMount() {
    ProductsApi.getAll()
      .then( data => {
        this.setState({
          Food: data
        })

      });

  }
    render() {
        return(
            
    <Fragment>    
        <div className="fooof">
        <h2 className="food">All Courses Available</h2>
        </div>

<div className="contanier">
<div className="row">
        <div class="row row-cols-1 row-cols-md-4">
          {this.state.Food.map(foood =>
                <div class="col-3 mb-3" key={foood.id}>
                  <FoodItem foood={foood} />

                </div>

            )}
        </div>
        </div>
</div>



    </Fragment>
        )
    };
}

export default Food;