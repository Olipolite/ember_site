import React from 'react';

const loginAccount = () => {
    return (
        <div className="login-account">
            <h5>Login</h5>
            <form>
                <div className="login-account__section">
                    <label for="name">Username</label>
                    <input type="text" name="name" id="name" required></input>
                </div>
                <div className="login-account__section">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required></input>
                </div>
                <div className="login-account__section">
                    <button className="btn" type="submit">Log In</button>
                </div>
            </form>
            <a className="login-account__register-link" href="/ember_site">Don't have an account?</a>
        </div>
    )
}

export default loginAccount;
