import React from 'react';

const RegisterAccount = () => {
    return (
        <div className="register-account">
            <p>Hello mah boiiiiii</p>
            <form>
                <div className="register-account__section">
                    <label for="name">Username</label>
                    <input type="text" name="name" id="name" required></input>
                </div>
                <div className="register-account__section">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required></input>
                </div>
                <div className="register-account__section">
                    <button className="btn" type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterAccount;
