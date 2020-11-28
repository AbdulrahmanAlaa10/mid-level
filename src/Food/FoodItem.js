import React from "react";
import "./Food.css";
import { Link } from "react-router-dom";
import "../Home.css";

export default function FoodItem(Props){
    const {foood} = Props;
    return (
        <div>

                        <div class="flex-container">
                                    <img src={foood.img} alt="Avatar" className="image"/>
                                    <div style={{display: "block"}}>
                                        <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                                        <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                                        <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                                        <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
                        
                                    </div>
                                    <div class="overlay overlayLeft" style={{zIndex: "1"}}>
                                    <div class="text">
                                        <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                                        <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                                        <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                                        <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                                        <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                                        <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                                        <Link to={"/Food/" + foood.id } className="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>Some Details</Link>

                                    </div>
                                </div>
                        </div>

        </div>


    )
}