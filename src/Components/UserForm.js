import React, { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = (props) => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    return (  
        <div className="container">
            <div className="row my-2 justify-content-center">
                <div className="col-6">
                    <div className= {"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">First Name</label>
                        <input type="text" value={firstName} onChange={ e => setfirstName(e.target.value)}/>
                    </div>
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Last Name</label>
                        <input type="text" value={lastName} onChange={ e => setlastName(e.target.value)}/>
                    </div>
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Email</label>
                        <input type="email" value={email} onChange={ e => setemail(e.target.value)}/>
                    </div>
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Password</label>
                        <input type="password" value={password} onChange={ e=> setpassword(e.target.value)}/>
                    </div>
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3" for="">Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange = { e => setconfirmPassword(e.target.value)}/>
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