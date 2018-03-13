import React from 'react';

const Registration = ()  => (
  <div className="app">
    <label>Enter e-mail: </label>
    <input type="text" id="regEmail"/>
    <br/>
    <br/>
    <label>Enter username: </label>
    <input type="text" id="regUsername"/>
    <br/>
    <br/>
    <label>Enter password: </label>
    <input type="password" id="regPass"/>
    <br/>
    <br/>
    <label>Repeat password: </label>
    <input type="password" id="regPassConfirm"/>
    <br/>
    <br/>
    <button onClick={this.handleRegClick}>Registration</button>
  </div>
);

export default Registration