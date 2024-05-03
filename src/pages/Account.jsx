import React from "react";
import RegisterAccount from "../components/RegisterAccount";
import placeholder from '../assets/testy.png';

const Account = () => {
    return (
        <div className="account">
            <div className="account__container">
                <img src={placeholder} alt="Background colorful nature" ></img>
                <RegisterAccount />
            </div>
        </div>
    )
}

export default Account;
