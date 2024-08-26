import React from 'react'
import mainIcon from '../assets/images/main-icon.png'
import loginFrame from '../assets/images/nr--log--in--frame.png'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SignUp() {

  // State to manage form data
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const Navigate = useNavigate()
 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if(FormData){
      Navigate('/signin')
    }
  }

  return (
    <>
    <section className="nr--signIn--wrapper">
        <div className="nr--signIN--main">
            <form action="signIn.html" className="nr--signIn--right">

                <div className="nr--signIn--right--logo">
                    <img src={mainIcon} alt="not found" />
                </div>

                <div className="nr--sign--in--text--inputs">
                    <div className="nr--signIn--right--texts">
                        <h3>Create new account</h3>
                        <p>Welcome back! Please enter your details</p>
                    </div>
                    <div className="nr--signIn--right--inputs">
                        <div className="nr--signIn--right--inputs--email">
                            <label htmlFor="nr--name">Full Name</label>
                            <input type="text" id="nr--name" name='fullname' value={formData.fullname} placeholder="Mahfuzul Nabil" onChange={handleChange} />
                        </div>
                        <div className="nr--signIn--right--inputs--email">
                            <label htmlFor="nr--email">Email</label>
                            <input type="email" name='email' value={formData.email} id="nr--email" placeholder="Enter Your Email" onChange={handleChange} required />
                        </div>
                        <div className="nr--signIn--right--inputs--email">
                            <label htmlFor="nr--pass">Password</label>
                            <input type="password" name='password' value={formData.password} id="nr--pass" placeholder="Enter Your Password" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="nr--signIn--right--checkbox">
                        <div className="nr--signIn--right--checkbox--rmember">
                            <input type="checkbox" id="remember" name="remember" value="#" />
                            <label htmlFor="remember"> Remember for 30 Days</label>
                        </div>
                        <Link to={'/forgot-password'} >Forgot password?</Link>
                    </div>
                </div>
                <div className="nr--sign--in--btn">
                    <button type="submit" onClick={handleSubmit}>Create Account</button>
                </div>

                <div className="nr--log--in--google--dont">
                    <Link to={'/signin'} className="nr--log--with--google">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.8055 10.5415L21 10.5415L21 10.5L12 10.5L12 14.5L17.6515 14.5C16.827 16.8285 14.6115 18.5 12 18.5C8.6865 18.5 6 15.8135 6 12.5C6 9.1865 8.6865 6.5 12 6.5C13.5295 6.5 14.921 7.077 15.9805 8.0195L18.809 5.191C17.023 3.5265 14.634 2.5 12 2.5C6.4775 2.5 2 6.9775 2 12.5C2 18.0225 6.4775 22.5 12 22.5C17.5225 22.5 22 18.0225 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z"
                                fill="#FBC02D" />
                            <path
                                d="M3.15332 7.8455L6.43882 10.255C7.32782 8.054 9.48082 6.5 12.0003 6.5C13.5298 6.5 14.9213 7.077 15.9808 8.0195L18.8093 5.191C17.0233 3.5265 14.6343 2.5 12.0003 2.5C8.15932 2.5 4.82832 4.6685 3.15332 7.8455Z"
                                fill="#E53935" />
                            <path
                                d="M12.0002 22.4999C14.5832 22.4999 16.9302 21.5114 18.7047 19.9039L15.6097 17.2849C14.6057 18.0454 13.3577 18.4999 12.0002 18.4999C9.39916 18.4999 7.19066 16.8414 6.35866 14.5269L3.09766 17.0394C4.75266 20.2779 8.11366 22.4999 12.0002 22.4999Z"
                                fill="#4CAF50" />
                            <path
                                d="M21.8055 10.5415L21.7975 10.5L21 10.5L12 10.5L12 14.5L17.6515 14.5C17.2555 15.6185 16.536 16.583 15.608 17.2855C15.6085 17.285 15.609 17.285 15.6095 17.2845L18.7045 19.9035C18.4855 20.1025 22 17.5 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z"
                                fill="#1565C0" />
                        </svg>
                        <span>Sign up with google</span>
                    </Link>

                    <Link to={'/signin'} className="nr--dont--ac">Already have an account? <span>Sign in</span></Link>

                    <div className="nr--log--in--frame">
                        <img src={loginFrame} alt="not found" />
                    </div>
                </div>

            </form>
        </div>
    </section>
    </>
  )
}

export default SignUp