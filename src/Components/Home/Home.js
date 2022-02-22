import React from 'react';
import './Home.css';
import { Container, Form, Button } from 'react-bootstrap';
// import LogoNETFLIX from '../../res/img/LogoNETFLIX.png'
import iconfacbook from "../../res/img/icon-facebook-48.png";
import icongoogle from "../../res/img/icon-google-48.png";

const Home=() => {
  return (
    <div> 
      <Container id= "Home-container"
                 className= "d-grid h-100" 
                 style= {{color: "#fff"}}>
       <Form id= "sign-in-from"
             className= "text-center w-100" >
         {/* <img className="mb-4 Logo"
             alt="React Bootstrap logo"
             src={LogoNETFLIX}
             width="263px"
             height="70px"
         />   */}
         <h1 className= "mb-3 fs-3 fw-normal" style={{fontWeight: "700"}} > Sign in to watch Unlimited movies, TV shows, and more.</h1>
        
         <Form.Group controlId="sign-in-email-address">
           <Form.Control type="email" 
                         placeholder="Email address"
                         size="lg"  //there is only small or large size
                         autoComplete="username"
                         className="position-relative" 
           />
           
         </Form.Group>
         <Form.Group controlId="sign-in-password" className="mb-3">
           <Form.Control type="password" 
                         placeholder="Password"
                         size="lg"  //there is only small or large size
                         autoComplete="current-passoword"
                         className="position-relative" 
           />
         </Form.Group>
         <Form.Group controlId="forgot-password-or-email-?"  className= "forgot-password" style={{fontWeight: "500", fontSize: "13px" }}>
           Forgot Password or Email ?
         </Form.Group>
         <Form.Group controlId="remember-me" className="d-flex  mb-3" style={{fontWeight: "500", fontSize: "13px" }}>
           <Form.Check label="Remember me" />
         </Form.Group>

         <div className= "d-grid " >
           <Button variant="info" size="lg" className= "mb-2"> Sign in </Button>
         </div>
          <div className="divider">-------------- or sign in with --------------</div>
          <div className="icon-party d-flex " style={{fontWeight: "600", fontSize: "13px" }} >
            <div className='space'>
             <a variant="light" size="lg" className= "mb-4 mt-3" > 
               <img className="facebook-icon" src={iconfacbook}/>
             </a>
           </div>
           <div>
             <a variant="light" size="lg" className= "mb-3"> 
              <img className="google-icon" src={icongoogle}/>
             </a>
           </div>
          </div>
          <div className="divider d-flex " style={{fontWeight: "500", fontSize: "13px" }} >
            Don't have an account? <strong>Sign Up</strong>
          </div>
        </Form> 
      </Container>
   </div>
  );
};

export default Home;