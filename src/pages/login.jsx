import React from 'react';
import './login.css';
import amico from '../assets/amico.png';

function login() {
  return (
    <div>
      <div class="login-form">
        
        <img src={amico} alt=""/>
    <form action="" method="POST">
            
            <div class="form-div">
                    
                            <div class="title">
                                <h3>
                                    Login
                                </h3>
                            </div>
                            <br/>
                            <div class="google-auth login">
                                <a  href=''>
                                    <i class="bi bi-google"></i>
                                    &nbsp;
                                    <b>Login with Google</b>
                                </a> 
                            </div>
                            <br/><br/>       
                    <input type="text" class="form-control" name="username" placeholder="Enter your email address..."/>                       
            
                <input type="password" class="form-control" name="password" placeholder="Enter your password..."/>
                
                <div class="t_c">
                    <input type="checkbox" name="" id="" checked />
                    <small>
                        Remember me.
                    </small>
                </div>
                    <button type="submit" class="form-btn">
                        Login
                    </button>
                    <br/>
                    <br/>
                    <center>
                        <small>
                            <a href="">
                                Don't Have an Account?
                            </a>
                        </small>
                    </center>
                </div>
    </form>
  </div>
    </div>
  );
};

export default login;