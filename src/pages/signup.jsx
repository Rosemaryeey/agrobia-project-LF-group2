import React from 'react'
import { Link } from 'react-router-dom';


function signup() {
  return (
    <div className=" h-screen w-screen">
     
     <div class="register-container">
                <h3>
                    Create an account
                </h3>
                <br/>
                <a class="google-auth" href=''>
                    <i class="bi bi-google"></i>
                    &nbsp;
                    <b>Sign up with Google</b>
                </a>
                <form action="" method="POST">

                    <div class="form-div">
                        <input type="text" placeholder='User Name'/>
                        <input type="text" placeholder="Phone Number" />
                        <input type="email" placeholder='Email address' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm password' />
                    <div class="t_c">
                        <input type="checkbox" name="" id="" required/>
                        <small>
                            I agree with the terms and services and all policy statements.
                        </small>
                    </div>
                    <button type="submit" class='form-btn'><b>
                        Sign Up
                    </b></button>
                    </div>
                    <br/>
                    
                </form>
            </div>
            
    </div>
  );
}

export default signup;