import React from "react";

function Login(){
    return(
        <>
    <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/loder.png" alt=""/>
                </div>
            </div>
        </div>
    </div>


    <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
        <form className="form-default" action="login-bg.mp4" method="POST">
            
            <div className="login-form">
                <div className="logo-login">
                    <a href="index.html"><img src="assets/img/logo/loder.png" alt=""/></a>
                </div>
                <h2>Login Here</h2>
                <div className="form-input">
                    <label for="name">Email</label>
                    <input  type="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-input">
                    <label for="name">Password</label>
                    <input type="password" name="password" placeholder="Password"/>
                </div>
                <div className="form-input pt-30">
                    <input type="submit" name="submit" value="login"/>
                </div>
                
                <a href="indx" className="forget">Forget Password</a>
                <a href="register.html" className="registration">Registration</a>
            </div>
        </form>
    </main>
        </>
    )
}
export default Login;