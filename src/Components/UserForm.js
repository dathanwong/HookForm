import React, { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = (props) => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) =>{
        setfirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0){
            setFirstNameError("First name must be at least 2 letters");
        }else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) =>{
        setlastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0){
            setLastNameError("Last name must be at least 2 letteres");
        }else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) =>{
        setemail(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0){
            setEmailError("Email must be at least 2 letteres");
        }else{
            setEmailError("");
        }
    }

    const handlePassword = (e) =>{
        setpassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0){
            setPasswordError("Password must be at least 8 characters");
        }else{
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) =>{
        setconfirmPassword(e.target.value);
        if(e.target.value !== password && e.target.value.length > 0){
            setConfirmPasswordError("Passwords must match");
        }else{
            setConfirmPasswordError("");
        }
    }

    return (  
        <div className="container">
            <div className="row my-2 justify-content-center">
                <div className="col-6">
                    <div className= {"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">First Name</label>
                        <input name="firstName" type="text" value={firstName} onChange={ e => handleFirstName(e)}/>
                    </div>
                    {
                        firstNameError ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {firstNameError}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Last Name</label>
                        <input name="lastName" type="text" value={lastName} onChange={ e => handleLastName(e)}/>
                    </div>
                    {
                        lastNameError ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {lastNameError}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Email</label>
                        <input name="email" type="email" value={email} onChange={ e => handleEmail(e)}/>
                    </div>
                    {
                        emailError ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {emailError}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Password</label>
                        <input name="password" type="password" value={password} onChange={ e=> handlePassword(e)}/>
                    </div>
                    {
                        passwordError ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {passwordError}
                        </div>
                        :
                        ""
                    }
                    {
                        confirmPasswordError ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {confirmPasswordError}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Confirm Password</label>
                        <input name="confirmPassword" type="password" value={confirmPassword} onChange = { e => handleConfirmPassword(e)}/>
                    </div>
                </div>
            </div>

            <div className="row my-2 justify-content-center">
                <div className="col-6">
                    <div className="row my-2 justify-content-center">
                        Your Form Data
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">First Name</div>
                        <div className="col-9">{firstName}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Last Name</div>
                        <div className="col-9">{lastName}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Email</div>
                        <div className="col-9">{email}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Password</div>
                        <div className="col-9">{password}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Confirm Password</div>
                        <div className="col-9">{confirmPassword}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserForm;