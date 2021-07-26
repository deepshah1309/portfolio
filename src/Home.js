import Aos from 'aos';
import React,{useEffect, useState} from "react";
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

import { ScatterBoxLoader } from "react-awesome-loaders";
function Home(){
    const [loading,setLoading]=useState(true);
    function getFormData(form) {
        var elements = form.elements;
    
        var fields = Object.keys(elements).filter(function(k) {
              return (elements[k].name !== "honeypot");
        }).map(function(k) {
            var names="";
          if(elements[k].name !== undefined) {
            names=elements[k].name;
          // special case for Edge's html collection
          }else if(elements[k].length > 0){
            names=elements[k].item(0).name;
          }
          return names;
        }).filter(function(item, pos, self) {
          return self.indexOf(item) === pos && item;
        });
    
        var formData = {};
        fields.forEach(function(name){
          var element = elements[name];
          
          // singular form elements just have one value
          formData[name] = element.value;
    
          // when our element has multiple items, get their values
          if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
              var item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(', ');
          }
        });
    
        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
    
        console.log(formData);
        return formData;
      }
      function validEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
      }
      function loaded() {
        console.log("Contact form submission handler loaded successfully.");
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
          forms[i].addEventListener("submit", handleFormSubmit, false);
        }
      }
      document.addEventListener("DOMContentLoaded", loaded, false);
      function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
      }
    function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var data = getFormData(form);         // get the values submitted in the form
    
        /* OPTION: Remove this comment to enable SPAM prevention, see README.md
        if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
          return false;
        }
        */
    
        if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
          var invalidEmail = form.querySelector(".email-invalid");
          if (invalidEmail) {
            invalidEmail.style.display = "block";
            return false;
          }
        } else {
          disableAllButtons(form);
          var url = form.action;
          var xhr = new XMLHttpRequest();
          xhr.open('POST', url);
          // xhr.withCredentials = true;
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function() {
              console.log(xhr.status, xhr.statusText);
              console.log(xhr.responseText);
              var formElements = form.querySelector(".form-elements")
              if (formElements) {
                formElements.style.display = "none"; // hide form
              }
              var thankYouMessage = document.querySelector(".thankyou_message");
              var ef=document.getElementById("gdeepform");
              if (thankYouMessage) {
                  ef.style.display="none";
                thankYouMessage.style.display = "block";
              }
              return;
          };
          // url encode form data for sending as post data
          var encoded = Object.keys(data).map(function(k) {
              return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          }).join('&');
          xhr.send(encoded);
        }
      }
      
    useEffect(()=>{
            Aos.init({duration:3000});
            if (loading) {
                setTimeout(() => {
                setLoading(false);
              }, 6000);
              }
    },[loading])
    return (

        loading===false?(
                <div className="App container-fluid bg-secondary">
                    <nav class="navbar bg-primary navbar-expand-lg navbar-light text-light bg-secondary">
  <a class="navbar-brand text-white" href="/"><b>DEEP SHAH</b></a>
  <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJZ9Q0Dcd_e69tFnOe4_NE1Ll3wbQ7FGrFw&usqp=CAU" alt="menu" height="50" width="50"></img>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      
     
    </ul>
    
  </div>
</nav>
                 
                        <div className="boxes row" data-aos="flip-left">
                           
                                    
                            <div className="col-md-12 text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABNYzojPHY2Gi6O1KSH3nT8GLyMEqt7n71g&usqp=CAU" alt="deepimage" style={{height:"100",width:"100",borderRadius:"50%",border:"2px dotted black",marginLeft:'auto',marginRight:"auto",display:"block"}}></img>
                            </div>

                    
                            <div className="col-md-12 text-center fontset" data-aos="fade-up">
                                DEEP SHAH
                                
                            </div>
                            <div className="col-md-12 text-center fontsets" data-aos="fade-down">
                                &nbsp;<img src="https://img.icons8.com/nolan/2x/email.png" alt="email" height="50" width="50"></img>
                                <a href="mailto:deepshah1309@gmail.com">deepshah1309@gmail.com</a>
                            </div>
                            <div className="col-md-12 text-center fontsets">
                                &nbsp;<img src="https://img.icons8.com/nolan/2x/phone-disconnected.png" alt="contact" height="50" width="50">
                                </img>&nbsp;
                                <a href="tel:+916354128145" className="text-decoration-none">+916354128145</a>
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
                                                <b>Qualified with:(74.16% average of All semesters)First class With Distinction</b>
                                                <br></br><button className="btn btn-secondary text-white border rounded-pill" data-aos="fade-up"><b>GATE Qualified 2021</b></button>
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
                                           <br></br><button className="btn btn-primary border rounded-pill text-white" data-aos="fade-right">C</button><button className="btn btn-primary border rounded-pill text-white" data-aos="fade-right">Java</button><button className="btn btn-primary text-white border rounded-pill" data-aos="fade-right">Javascript</button><button className="btn btn-primary text-white border rounded-pill" data-aos="fade-right">PHP</button>

                                    </div>
                                    <div className="bg-light fontset2">
                                    
                                        <b className="fontsets1"><img src="https://img.icons8.com/small/2x/4a90e2/customer-support.png" alt="tech" height="30" width="30"></img>Techniques</b>
                                        <br></br>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="fade-down">Datastructure and algorithms</button>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="fade-down">Database management system</button>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="fade-down">MVC pattern</button>
                                        <br></br>
                                        <b className="fontsets1"><img src="https://img.icons8.com/small/2x/4a90e2/domain.png" height="30" width="30" alt="web"></img>WebTechStack</b><br></br>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="slide-right">HTML</button>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="slide-right">CSS</button>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="slide-right">Bootstrap</button>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="slide-right">Javascript</button>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="slide-right">Express js</button>  <button className="btn btn-primary text-white border rounded-pill">React js</button>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="slide-right">Node js</button>
                                        <br></br>
                                        <b className="fontsets1"><img src="https://img.icons8.com/small/2x/4a90e2/database.png" alt="db" height="30" width="30"></img>Databases</b>
                                        <br></br>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="slide-down">MYSQL</button><button className="btn btn-primary text-white border rounded-pill" data-aos="slide-down">MongoDb</button>
                                        <br></br>
                                        <b className="fontsets1">Tools</b>
                                        <br></br>
                                        <button className="btn btn-primary text-white border rounded-pill" data-aos="fade-up">VScode</button>
                                        <button className="btn btn-primary text-white border rounded-pill"  data-aos="fade-up">PHPMyadmin(MYSQL)</button>
                                        <button className="btn btn-primary text-white border rounded-pill"  data-aos="fade-up">MongoDb Compass</button>
                                        <button className="btn btn-primary text-white border rounded-pill"  data-aos="fade-up">Oracle Live Sql</button>
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
                        <div className="boxes row">
                            <div className="col-md-12"><h1>Hobbies</h1></div>
                            <div className="col-md-12 card">
                                    <b className="fontsets1">
                                        Instument Playing,Listening Music,Drawing
                                    </b>
                                    <br></br>
                                    <b className="border rounded-pill bg-light text-dark fontsets1">
                                        Entertainer(Professional Keyboard Artist) On youtube<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMito5VOuFfyeoVKnB-9nqzWuSJGnl23sa-w&usqp=CAU" alt="youtube" height="50" width="50"></img>
                                    </b>
                            </div>

                        </div>
                        <div className="boxes row bg-secondary text-white">
                        <div className="col-md-12"><h1>Get In Touch</h1></div>
                        <div className="col-md-8 card offset-md-2">
                        <form id="gdeepform" class="border rounded gform pure-form pure-form-stacked" method="POST" data-email="deepwebwork123@gmail.com"
                        
                        onSubmit={handleFormSubmit}
  action="https://script.google.com/macros/s/AKfycbw5ivBwk3UDUJyfMM9Oxc5KyfxcdvP8tj-BhARzEREvKuQmIxksAPa0uo4EqAoCjgzIvA/exec">

  <div class="mb-4">
    <div className="fontsets1">Contact me!!</div>
    <input type="text"  id="name" name="name" placeholder="Enter your Name"  class="form-control border rounded-pill" />
    
  </div>


  <div class="mb-4 border rounded-pill">
 
    <input id="email" name="email" type="email" 
        required placeholder="Email address.." class="form-control border rounded-pill" />
    
  </div>

 
  <div class="mb-4">
  
  
    <textarea class="form-control"  id="message" name="message" rows="10"
        placeholder="Write a message to deep..." className="form-control border rounded"></textarea>
    
  </div>

 
  

  <button type="submit" class="btn btn-primary  mb-4 border rounded-pill">Send</button>
  
</form>
<div class="thankyou_message border bg-dark text-white rounded-pill pb-4 mb-4" data-aos="flip-right">
      <h2><em>Thanks</em> for contacting me!
        I  will get back to you soon!</h2>
    </div>


                        </div>

                        </div>

                    
                </div>
        ):(
        <div className="container-fluid bg-secondary cvx">
                <div className="row bg-dark d-flex justify-content-center">
                <div className="col-md-12 text-center text-white h-100"><h1>DEEP SHAH</h1></div>
                
                <ScatterBoxLoader
        primaryColor={"#6366F1"}
        background={"transparent"}
      />
                </div>
        </div>
        )
    )
}
export default Home;