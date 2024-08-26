import React from 'react'

function ForgotPassword() {
  
  return (
    <>
      {/* <section className="nr--forgetPassword--wrapper">
            <div className="container">
                <div className="nr--forget--password--main">

                    <form action="#">

                        <div className="nr--step--wrapper--one">
                            <div className="nr--forget--password--logo">
                                <img src="assets/images/main-icon.png" alt="not found" />
                            </div>


                            <div className="nr--forget--password--text">
                                <h2>Forgot password?</h2>
                                <p>Enter your email for the verification proccess,we will send 4 digits code to your
                                    email.</p>
                            </div>
                            <div className="nr--forget--password--email">
                                <label for="username">Email</label>
                                <input type="email" id="username" name="username" className="nr--input--field"
                                    placeholder="" />
                                <p className="nr--EroorText"></p>
                            </div>
                            <div className="nr--forget--password--btn">
                                <a className="nr--continue--btn" href="#">Continue</a>
                            </div>



                            <div className="nr--forget--password--back">
                                <div className="nr--forget--password--back--svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="#121715" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                        </div>



                        <div className="nr--step--wrapper--two">
                            <div className="nr--forget--password--logo">
                                <img src="assets/images/main-icon.png" alt="not found" />
                            </div>

                            <div className="nr--forget--password--text">
                                <h2>Verification</h2>
                                <p>Enter your 4 digits code that you received on your email.</p>
                            </div>

                            <div className="otp-input-fields">
                                <input type="number" className="otp__digit otp__field__1 _notok" id="_otp"  />
                                <input type="number" className="otp__digit otp__field__2 _notok" id="_otp1" />
                                <input type="number" className="otp__digit otp__field__3 _notok" id="_otp2" />
                                <input type="number" className="otp__digit otp__field__4 _notok" id="_otp3" />
                            </div>

                            <div className="nr--forget--password--btn">
                                <a className="nr--continue--btn--two" href="#">Continue</a>
                            </div>

                            <div className="nr--counter">
                                <h3>If you didn’t receive a code!<span> Resend in 00: <span
                                className="nr--timer--countdown">30</span> sec</span></h3>
                            </div>


                            <div className="nr--forget--password--back backFirst">
                                <div className="nr--forget--password--back--svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="#121715" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                        </div>


                        <div className="nr--step--wrapper--three">
                            <div className="nr--forget--password--logo">
                                <img src="assets/images/main-icon.png" alt="not found" />
                            </div>


                            <div className="nr--forget--password--text">
                                <h2>New Password</h2>
                                <p>Set the new password for your account so you can login and access all featuress.</p>
                            </div>
                            <div className="nr--forget--password--email">
                                <label for="password">Enter new password</label>
                                <input type="password" id="password" name="password" className="nr--input--field--2"
                                    placeholder="8 symbls at least" />
                                <p className="nr--EroorText"></p>
                            </div>
                            <div className="nr--forget--password--email">
                                <label for="password">Confirm password</label>
                                <input type="password" id="password2" name="password" className="nr--input--field--2" placeholder="8 symbls at least" />
                                <p className="nr--EroorText"></p>
                            </div>
                            <div className="nr--forget--password--btn">
                                <button disabled type="button" className="nr--continue--btn--2"
                                    data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Update </button>
                            </div>


                            <div className="nr--forget--password--back backSecond">
                                <div className="nr--forget--password--back--svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="#121715" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                        </div>




                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true"
                            aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">

                                        <div className="nr--sucess--svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                                viewBox="0 0 100 100" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M70.0842 34.4195C71.3018 35.649 71.3058 37.6465 70.0932 38.881L43.8768 65.5715C42.6643 66.8059 40.6944 66.81 39.4768 65.5806L29.9159 55.9264C28.6983 54.6969 28.6942 52.6994 29.9067 51.4648C31.1192 50.2302 33.0892 50.2261 34.3068 51.4555L41.6633 58.8838L65.6841 34.4285C66.8967 33.194 68.8667 33.19 70.0842 34.4195Z"
                                                    fill="#01763F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M49.7901 10.1917C30.8589 10.1917 14.9769 23.4109 10.9001 41.1196L10.9001 41.1197C10.2365 44.0022 9.88505 47.0067 9.88505 50.0968C9.88505 72.119 27.7679 90.0018 49.7901 90.0018C71.8124 90.0018 89.6952 72.119 89.6952 50.0968C89.6952 28.0745 71.8124 10.1917 49.7901 10.1917ZM3.93933 39.5171C8.74554 18.6401 27.4556 3.04883 49.7901 3.04883C75.7573 3.04883 96.8381 24.1296 96.8381 50.0968C96.8381 76.0639 75.7573 97.1447 49.7901 97.1447C23.823 97.1447 2.74219 76.0639 2.74219 50.0968C2.74219 46.4634 3.15558 42.9213 3.93933 39.5171Z"
                                                    fill="#01763F" fill-opacity="0.3" />
                                            </svg>
                                        </div>

                                        <div className="nr--sucess--text">
                                            <h3>Successfully</h3>
                                            <p>Your password has been reset successfully</p>
                                        </div>

                                        <div className="nr--forget--sucess--btn">
                                            <button className="nr--continue--btn--3" href="signIn.html">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

            
                </div>

                </div>
      
        </section> */}

    
    </>
  )
}

export default ForgotPassword;