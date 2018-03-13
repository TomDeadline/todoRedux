import React from 'react';

const Signin = () => (
  <div>
    <div className="field">
      <label htmlFor="login-field">Login: </label>
      <input type="text" name="login" id="login-field"/>
    </div>
    <br/>
    <div className="field">
      <label htmlFor="password-field">Password: </label>
      <input type="password" name="password" id="password-field"/>
    </div>
    <br/>
    <button onClick={this.handleSignInClick}>Sign in</button>
    <br/>
    <br/>
    <button onClick={this.handleRegClick}>Registration</button>
  </div>
);


export default Signin