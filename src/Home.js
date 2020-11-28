import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import Footer from "./Footer";

class Home extends Component {

    
    render() {
    return (

        <Fragment>

            <img src="https://img-a.udemycdn.com/notices/home_banner/image_udlite/3b5f0a73-8624-476c-b1bd-4fd5a92b4a3b.jpg?26o5b9L8ZY31aIWCpdA6YjERBU7JY5zfoz7y1jD0xjohQZWdJ0lsJjtrpGSfDpbwi23YuYUrZQa6yyTMlLb5xgztqi8hkckwSpukg3OL0zvz4Y3t2S0xuyo9oXw4W7AoLrXcJA9JwuDu26355WZQtGjms3nYlgTgMto36h5sQl-3taNiu6s0bg" className="images"  />


            <div className="white-back">
                <h1 className="headingInBack">48-Hout Flash Sale</h1>
                <p className="ParaInBack">Great timing! Courses as low as $12.99 through tomorrow.</p>

                <Footer />

            </div>


            <h1 class="heading2">The world's largest selection of courses</h1>
            <p class="para2">Choose fromthe best online video courses with new additions published every month</p>

            <div class="listCourses" style={{marginLeft: "15px"}}>
                <ul class="active">
                    <Link to="/python"><li style={{borderBottom: "2px solid black", marginRight: "5px"}}>Projects</li></Link>
                    <a href="#python1"><li>HTML</li></a>
                    <a href="#python1"><li>Web Development</li></a>
                    <a href="#python1"><li>JavaScript</li></a>
                    <a href="#python1"><li>HTML5</li></a>
                    <a href="#python1"><li>CSS & CSS3</li></a>
                    <a href="#python1"><li>BootStrap4</li></a>
                    <a href="#python1"><li>React.Js</li></a>

                </ul>
            </div>
            <hr />

            <section className="about">
              <div>
                  <h1 style={{fontSize: "19px", fontWeight: "bold", width: "70%", marginLeft: "80px"}}>Expand your career opportunities with Web Developer</h1>
                  <p style={{fontSize: "15px", width: "70%", marginLeft: "80px"}} >Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy</p>

              </div>
              <div className="about1">
                <img src="https://s.udemycdn.com/topic-images/lohp-topic-banners/GettyImages-1166389425_opt.jpg" style={{marginRight: "100px"}} className="imageee" />

              </div>
            </section>



            <div class="ljskdnkdj" style={{maxWidth: "100%"}}>

            <div class="flex-container">
                        <img src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_11.jpg?secure=ouOfNphi4hTvTJpbGceyfA%3D%3D%2C1605789858" alt="Avatar" className="image"/>
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
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                       
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                    <img src="https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?_Z5osQzuq8_pq5oQY_8tH_4NGAKXH8FxUnqisLMVkc3BMgIORCTUiKiz23BKRkPvaoEqyIg5ZcfpFxvljeARWsAdHHtewLCs4GCeWAp33JXE__RD38z5MdwzDPNFmAA" alt="Avatar" class="image" />
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
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/851712_fc61_6.jpg?AR0cUcgMeZ1DnC690Kuvs643Gw_-xPkhLagOzZWi2bhYp2wlYG6WOfkgr21Wv0g5Cp7k3y0J_cx4fsGAcgVYYXCFu3Ago12dFgmVpMPQmKNb-nqj3oEah-8bgJ5dGhM" alt="Avatar" className="image"/>
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayrightbottom" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/957422_9e86.jpg?G6n3B3Eah_kU21jOfMsID6pdub_Flv4KojpAHR1onWbqMAyoJkKIcLWDcQ-J6Yd2ryqbN2S376JuRIbZVrmwxbUq2IVh7Sbn1H4_6vRZILz-H343MrWFx8da2s8Y" alt="Avatar" className="image"/>
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayright" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/954710_6b16_3.jpg?RKPyNGxkpHkyh46peesnygmyPF5v3E3H8N9qiH0mkt1AmPWjLiBB9Qsna-76CGqswGTS3FFNBk19A3zvEheSeH8sQN3Fpef9Cefenm5n2aqxx5plAbzndgNr7NoDe20" alt="Avatar" className="image"/>
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayright" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            </div>



            <div class="ljskdnkdj" style={{maxWidth: "100%"}}>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg?JnB5aT5VOkhsEKTsTWlaNYNDJSP3vN3SliTZ3Q0JeWP3klK9bhmiqS-K-XVy0_BG3xvc4dbyC05esxqxj2z0dvLImfmNoj-xF8tq0fOO56ebHeWiFLUpemuAjbay" alt="Avatar" className="image"/>
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
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                    <img src="https://img-a.udemycdn.com/course/240x135/1399352_6f7a.jpg?oqijiHYPS0vmfg2p6J57ju99aYrNB2l5kKa3c4aYyQYfdM08S8uJy8r_hjIErI5jbgtk2t56iE4UpGYogoUCjuULQnSSKfkUpvYe7Go0U7_it4Sg3lJ2OeoBFSECyw" alt="Avatar" class="image" />
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayrightbottom" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg?JnB5aT5VOkhsEKTsTWlaNYNDJSP3vN3SliTZ3Q0JeWP3klK9bhmiqS-K-XVy0_BG3xvc4dbyC05esxqxj2z0dvLImfmNoj-xF8tq0fOO56ebHeWiFLUpemuAjbay" alt="Avatar" className="image"/>
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
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/3490754_9284.jpg?xFv1Yctn24xSfnR2kMMOpbO_6FuVNaXpetp0cTwDXacVaumehPWWuGT-3oCj72_LaXj4RfPRY2rbbjbsVZj3JwSHn43sMNUexE_phhEh2CaLZtLXnrcNFqtHffDnGw" alt="Avatar" className="image"/>
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayright" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-b.udemycdn.com/course/240x135/1187016_51b3.jpg?secure=WKF5f7CPXhnKsRCogIXHRQ%3D%3D%2C1605769435" alt="Avatar" className="image"/>
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayright" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            </div>



            <div class="ljskdnkdj" style={{maxWidth: "100%"}}>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/1350984_2355_6.jpg?dvBoaKY-LVeJm9biuZbTImHSPlPMhN6jlgPKEopesVie54K3QQRBkCfhvrQXco0CyiEPbo0bxJxRwiCQQ6AAKqYCF54TJXYe4ub_0WYbI8i5TcuG20Kx4XLqhQy94gtp" alt="Avatar" className="image"/>
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
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                    <img src="https://img-a.udemycdn.com/course/240x135/73080_7783_6.jpg?8emCJKFIh_QPV6iije69_xkHnVXtrgUgifDdeHjfxgjYIYxUd4IqZoruMQwOKMsy7LEwNMFPJj93whwvNz0iTI9M19Ud5g-lQ2tPPZvtfs8G8_4cu-tkOPlqkDDScQ" alt="Avatar" class="image" />
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayrightbottom" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/1623806_1294_2.jpg?sG7AyGhfDLUWRT_5PrYRc63pzyWpwqprpT9x3YBn8QLaTaJImtyj3kfgg460k34WSPLo6FFuYUo35P2nn_9PPdVLOS39O7SY-0pPAM57xui_ynK7CR58eXyhppHPcWeE" alt="Avatar" className="image"/>
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
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/65492_33e5_5.jpg?whQsIFHmls_DFMKP-XLOLIAmqOb_pe1_zyPJdgUsgqE3jIJhDfSiZHn73T7PTppYeQbo2iUX9Pru8FzCzQG6URh54bp2gF3wwsjwTyAqRqvcDpf_PF5BRvU_quBD1A" alt="Avatar" className="image"/>
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayright" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            <div class="flex-container">
                        <img src="https://img-a.udemycdn.com/course/240x135/3213163_25eb_3.jpg?Ptabr1W0_Zu3y9WV2GcVQmjFBtbH-JNekU_HBQgAKceRZtElAZ_JmPxQbcgY1Hq44pfdOmEO8-o4U5K8zFIBxA6vU3fK--c2ixMCglsLqf5JIiZF25LAbXxUr9khTdjQ" alt="Avatar" className="image"/>
                        <div style={{display: "block"}}>
                            <h1 style={{display: "block", fontSize: "17px", fontWeight: "bold", width: "250px", marginLeft: "1px", marginTop: "10px"}}>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{display: "block", fontSize: "11px", color: "rgb(151, 151, 151)", marginLeft: "1px"}}>Jose Portilla</p>
                            <p className="spannnn">$12.99 <span className="spannnnnn" style={{textDcoration: "lineThrough", marginLeft: "1px"}}>$129.99</span></p>
                            <p style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px", width: "80px", marginLeft: "1px"}}>Bestseller</p>
            
                        </div>
                        <div class="overlay overlayright" style={{zIndex: "1"}}>
                        <div class="text">
                            <h1>2020 Complete Python Bootcamp From Zero to Hero in Python</h1>
                            <p style={{color:"#2d8643"}}><span style={{backgroundColor: "#ffe799", color: "#593d00", padding:"5px"}}>Bestseller</span> Updated June 2020</p>
                            <p>✔ Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                            <p>✔ Learn to use Python professionally, learning both Python 2 and Python 3!</p>        
                            <p>✔ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            <p>✔ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            <Link to="/Food">
                            <button class="btn btn-danger btn-block" style={{width: "90%", marginLeft: "20px"}}>All Courses</button>

                            </Link>
                        </div>
                    </div>
            </div>

            </div>


            <section class="getstrated">
                <h1>Get personal learning recommendations</h1>
                <p>Answer a few questions for your top picks</p>
                <Link to="/Food">
                <button class="btn btn-outline-light" style={{width: "200px"}}>Get Started</button>
                </Link>
            </section>

            <section class="imageseses">
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg" />
                    <h1 class="head">Design</h1>
                </div>
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg" />
                    <h1 class="head">Development</h1>
                </div>
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg" />
                    <h1 class="head">Marketing</h1>
                </div>
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg" />
                    <h1 class="head">IT and Software</h1>
                </div>
            </section>


            <section class="imageseses">
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg" />
                    <h1 class="head">Personal Development</h1>
                </div>
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg" />
                    <h1 class="head">Business</h1>
                </div>
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg" />
                    <h1 class="head">Photography</h1>
                </div>
                <div class="imagesssss">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg" />
                    <h1 class="head">Music</h1>
                </div>
            </section>

            <section class="secInsteuctor" style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
                <div>
                    <img src="/imagess/pexels-negative-space-97077.jpg" width="500" />

                </div>
                <div style={{marginLeft: "80px", width: "40%", paddingTop: "7%"}}>
                    <h1 style={{fontSize: "29px", fontWeight: "bold"}}>Become an instructor</h1>
                    <p>Top instructors from around the world teach millions of students on Dros Web. We provide the tools and skills to teach what you love.</p>
                    <Link to="/Contact">
                    <button class="btn btn-info">Start teaching today, Send Your data</button>
                    </Link>

                </div>
            </section>

            <hr />


            <section>
                <h1 style={{textAlign: "center", marginTop: "100px", marginBottom: "30px", fontSize: "28px", fontWeight: "bold"}}>Trusted by companies of all sizes</h1>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "100px", marginRight: "10px"}}>
                    <img src="https://s.udemycdn.com/partner-logos/booking-logo.svg" style={{marginRight: "20px"}} />
                    <img src="https://s.udemycdn.com/partner-logos/volkswagen-logo.svg"  style={{marginRight: "20px"}} />
                    <img src="https://s.udemycdn.com/partner-logos/mercedes-logo-v2.svg"  style={{marginRight: "20px"}} />
                    <img src="https://s.udemycdn.com/partner-logos/adidas-logo.svg"  style={{marginRight: "20px"}} />
                    <img src="https://s.udemycdn.com/partner-logos/eventbrite-logo.svg"  style={{marginRight: "20px"}} />

                </div>
            </section>

            <hr />

            <footer className="footer">
            <div className="container Abodt">

            <div className="col-md-6 col-lg-6">
                <h1>About us</h1>
                <p>Dros Wed We are, thanks to God, an initiative and we have more than one channel spreading the field of web programming for free We make every effort to get at least one person capable of developing websites</p>

            </div>

            <div className="col-md-6 col-lg-6">
                <h1>Contact us</h1>
                <i className="fa fa-map-marker icooooon" aria-hidden="true"><span>Place: Egypt Cairo 6 Octobar 47 street</span></i>
                <br />
                <i className="fa fa-phone-square icooooon" aria-hidden="true"><span>Phone: 0201008698567</span></i>
                <br />
                <i className="fa fa-envelope icooooon" aria-hidden="true"><span>E-mail: Abdulrahmaanalaa199@gmail.com</span></i>

            </div>

            </div>
        </footer>


        </Fragment>


        );
    }
}
export default Home;
