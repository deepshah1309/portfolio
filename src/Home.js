import Aos from 'aos';
import React,{useEffect} from "react";
import './Home.css';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';
import MsuImage from './Assets/MSU.jpg';
import TSF from './Assets/tsf.png';
import MyCaptain from './Assets/mycaptain.png';
import LeetCode from './Assets/leetcode.svg';
import NarayanImage from './Assets/narayan vidhyalaya.jpg';
import HackerRank from './Assets/hackerrank.jpg';
import ThoughtBitz from './Assets/thoughtbitz.png';
function Home(){
    useEffect(()=>{
            Aos.init({duration:3000});
    },[])
    return (
                <div className="App container-fluid bg-secondary">
                    
                 
                        <div className="boxes row" data-aos="flip-left">
                           
                                    
                            <div className="col-md-12 text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABNYzojPHY2Gi6O1KSH3nT8GLyMEqt7n71g&usqp=CAU" alt="deepimage" style={{height:"100",width:"100",borderRadius:"50%",border:"2px dotted black",marginLeft:'auto',marginRight:"auto",display:"block"}}></img>
                            </div>

                    
                            <div className="col-md-12 text-center fontset">
                                DEEP SHAH
                                
                            </div>
                            <div className="col-md-12 text-center fontsets">
                                &nbsp;<img src="https://img.icons8.com/nolan/2x/email.png" alt="email" height="50" width="50"></img>
                                deepshah1309@gmail.com
                            </div>
                            <div className="col-md-12 text-center fontsets">
                                &nbsp;<img src="https://img.icons8.com/nolan/2x/phone-disconnected.png" alt="contact" height="50" width="50">
                                </img>&nbsp;
                                +916354128145
                            </div>
                            <br></br>
                            <br></br>
                            <div className="col-md-12 text-center fontsets1">
                                WebDevelopment|Java development|MERN-stack Enthusiast|Blogger At Medium<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwCejCu___DiCCH84-iHvbnctI54zWg_Xrg&usqp=CAU" alt="medium" height="45" wisth="45"></img>(Publication On tech series)
                            </div>
                            <div className="col-md-12 text-center fontsets">
                            <Typewriter
                          
                                options={{
                                    strings: ['Student of Maharaja Sayajirao University,Gujarat', 'Enthusiast about Full Stack Development',''],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                            </div>
                          

                        </div>
                        <div className="boxes row bg-light text-center  introduction" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="col-md-12"><h1><img src="https://img.icons8.com/dotty/2x/education.png" alt="edu" height="45" width="45"></img>Education</h1></div>
                           
                            <div className="card col-md-12 w-80 mx-auto text-center">
                                        <div className="card-body">
                                           <img src={MsuImage} height="100" width="100" style={{borderRadius:"19px"}} alt="MSU"></img> 
                                           <br></br> 
                                           <b className="fontsets1">The maharaja sayajirao university</b>
                                        
                                            <br></br>
                                                Year:2018-2022(B.E Computer science and Engineering)
                                            <br></br>
                                                <b>Qualified with:(71% average of All semesters)First class With Distinction</b>
                                                <br></br><b>GATE Qualified 2021</b>
                                        </div>
                            </div>
                            <div className="card col-md-12 w-80 mt-2 mx-auto text-center">
                                        <div className="card-body">
                                           <img src={NarayanImage} height="100" width="100" style={{borderRadius:"19px"}} alt="MSU"></img> 
                                           <br></br> 
                                           <b className="fontsets1">Shree Narayan Vidhyalaya</b>
                                        
                                            <br></br>
                                                Gujarat Higher secondary Board
                                            <br></br>
                                                <b>91%(PCM)(physics+chemistry+maths)</b>
                         
                                        </div>
                            </div>
                            
                              
                           
                        </div>
                        <div className="boxes row  introduction" data-aos="flip-right">
                                <div className="col-md-12">
                                    <h1>
                                    <img src="https://img.icons8.com/nolan/2x/communication-skill.png" height="45" width="45" alt="skill"></img>Skills
                                </h1>
                                </div>
                                <div className="col-md-12">
                                    <div className="bg-light fontset2">
                                           <b className="fontsets1"><img src="https://img.icons8.com/small/2x/4a90e2/code-file.png" height="30" width="30" alt="pro"></img>Languages</b>
                                           <br></br><button className="btn btn-primary border rounded-pill text-white">C</button><button className="btn btn-primary border rounded-pill text-white">Java</button><button className="btn btn-primary text-white border rounded-pill">Javascript</button><button className="btn btn-primary text-white border rounded-pill">PHP</button>

                                    </div>
                                    <div className="bg-light fontset2">
                                    
                                        <b className="fontsets1"><img src="https://img.icons8.com/small/2x/4a90e2/customer-support.png" alt="tech" height="30" width="30"></img>Techniques</b>
                                        <br></br>
                                        <button className="btn btn-primary text-white border rounded-pill">Datastructure and algorithms</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Database management system</button>
                                        <button className="btn btn-primary text-white border rounded-pill">MVC pattern</button>
                                        <br></br>
                                        <b className="fontsets1"><img src="https://img.icons8.com/small/2x/4a90e2/domain.png" height="30" width="30" alt="web"></img>WebTechStack</b><br></br>
                                        <button className="btn btn-primary text-white border rounded-pill">HTML</button>
                                        <button className="btn btn-primary text-white border rounded-pill">CSS</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Bootstrap</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Javascript</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Express js</button>  <button className="btn btn-primary text-white border rounded-pill">React js</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Node js</button>
                                        <br></br>
                                        <b className="fontsets1"><img src="https://img.icons8.com/small/2x/4a90e2/database.png" alt="db" height="30" width="30"></img>Databases</b>
                                        <br></br>
                                        <button className="btn btn-primary text-white border rounded-pill">MYSQL</button><button className="btn btn-primary text-white border rounded-pill">MongoDb</button>
                                        <br></br>
                                        <b className="fontsets1">Tools</b>
                                        <br></br>
                                        <button className="btn btn-primary text-white border rounded-pill">VScode</button>
                                        <button className="btn btn-primary text-white border rounded-pill">PHPMyadmin(MYSQL)</button>
                                        <button className="btn btn-primary text-white border rounded-pill">MongoDb Compass</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Oracle Live Sql</button>
                                        <br></br>
                                        <b className="fontsets1">communication</b>
                                        <br></br>
                                        <button className="btn btn-primary text-white border rounded-pill">English</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Hindi</button>
                                        <button className="btn btn-primary text-white border rounded-pill">Gujarati</button>
                                    </div>
                                </div>
                        </div>
                        <div className="boxes row  introduction" data-aos="flip-left">
                            <div className="col-md-12 text-center"><h1>InternShips</h1></div>
                            <div className="card col-md-12 w-80 mx-auto text-center">
                                        <div className="card-body">
                                           <img src={TSF} height="100" width="100" style={{borderRadius:"19px"}} alt="MSU"></img> 
                                           <br></br> 
                                           <b className="fontsets1">The Sparks Foundation(Web development Intern)</b>

                                            <br></br>
                                                duration:2 months
                                            <br></br>
                                                <b>Task:To build the basic transaction functionality with WebStack
                                                <br></br>TechStack Used:HTML,CSS,bootstrap,Core PHP,MYSQL</b>
                                                <br></br>
                                                <button className="btn btn-outline-primary">Internship certificate</button>
                                        </div>
                            </div>
                            <div className="card col-md-12 w-80 mx-auto text-center">
                                        <div className="card-body">
                                           <img src={MyCaptain} height="100" width="140" style={{borderRadius:"19px"}} alt="MSU"></img> 
                                           <br></br> 
                                           <b className="fontsets1">MyCaptain(The Climber),Banglore<br></br>Workshop facilitator for technical stack</b>

                                            <br></br>
                                                duration:3 months
                                            <br></br>
                                                <b>Task:Track the engagement of discussions,been a point of contact between Mentees and mentor
                                                <br></br>
                                                </b>
                                                <br></br>
                                                <button className="btn btn-outline-primary">Letter Of recommendation From Mycaptain</button>
                                                <button className="btn btn-outline-primary">Internship certificate</button>
                                                <div></div>
                                        </div>
                            </div>
                        </div>
                        <div className="boxes row">
                            <div className="col-md-12">
                                <h1 className="fontsets2">Projects</h1>

                            </div>
                            <div className="col-md-6 card text-left border rounded-pill border-primary">
                                <b className="fontsets1 bg-dark text-light border rounded-pill"><img src={ThoughtBitz} alt="ThoughtBitz" height="50" width="50"></img>Thoughtbitz</b>
                                <ul>
                                        <li><div><b>TeamSize:4</b></div></li>
                                        <li><div className="text-dark font-bolder"><b>Aim:To provide the common platform for Learning,writing ideas,and practicing</b></div></li>
                                        <li><div><b>Tech Stack:
                                            <br></br>
                                            <ul>
                                                <li>Html,css,js,Core PHP,MYSQL</li>
                                                <li>Tools:Vscode,phpmyadmin</li>
                                            </ul>
                                            </b></div></li>
                                            <li><button className="btn btn-dark text-white border rounded-pill">Know More</button></li>
                                </ul>
                            </div>
                            <div className="col-md-6 card text-left border rounded-pill border-primary">
                                <b className="fontsets1 bg-dark text-light border rounded-pill border-white"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB3uL_BisAkkKCsYMvzrJa06LwuX5WWs2Ng&usqp=CAU" height="45" width="45" alt="Chat"></img>NamasteChat</b>
                                <ul>
                                        
                                        <li><div className="text-dark font-bolder"><b>functionalities:Group Chat With socket Programming,Video call with two users</b></div></li>
                                        <li><div><b>Tech Stack:
                                            <br></br>
                                            <ul>
                                                <li>React js,peer js,socket.io,WebRtc</li>
                                                <li>Tools:Vscode</li>
                                            </ul>
                                            </b></div></li>
                                            <li><button className="btn btn-dark text-white border rounded-pill">Know More</button></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="boxes row">
                                <div className="col-md-12 text-center">
                                        
                                        <img src={LeetCode} alt="leetcode" height="100" width="100"></img>
                                        <br></br>
                                        <b>100+ Problems Practiced On leetcode</b>
                                        <a href="https://leetcode.com/deepshah1309/" className="btn btn-outline-success text-decoration-none">Check Out</a>
                                        <br></br>
                                        <img src={HackerRank} alt="hackerrank" height="100" width="100"></img>
                                        <br></br>
                                        <b>4 STAR in problem solving On hackerRank</b>
                                </div>
                        </div>

                    
                </div>
    )
}
export default Home;