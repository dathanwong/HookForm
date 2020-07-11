import React, { useReducer } from 'react';
import styles from './UserForm.module.css';

const initialState = {
    firstName: {
        value: "",
        error: null
    }, 
    lastName:{
        value: "",
        error: null
    },
    email:{
        value: "",
        error: null
    },
    password: {
        value: "",
        error: null
    },
    confirmPassword: {
        value: "",
        error: null
    }
}

function reducer(state, action){
    return{
        ...state,
        [action.type]: action.payload
    };
}

const UserForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e, payload){
        const{name} = e.target;
        dispatch({
            type: name,
            payload: payload
        });
    }


    // const [firstName, setfirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
    // const [confirmPassword, setconfirmPassword] = useState("");

    // const [firstNameError, setFirstNameError] = useState("");
    // const [lastNameError, setLastNameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) =>{
        let payload = {value: e.target.value, error: null};
        if(e.target.value.length < 2 && e.target.value.length > 0){
            payload["error"] = "First name must be at least 2 letters";
        }else{
            payload["error"] = "";
        }
        e.target.value = payload.value;
        handleChange(e, payload);
    }

    const handleLastName = (e) =>{
        let payload = {value: e.target.value, error: null};
        if(e.target.value.length < 2 && e.target.value.length > 0){
            payload["error"] = "Last name must be at least 2 letters";
        }else{
            payload["error"] = "";
        }
        e.target.value = payload.value;
        handleChange(e, payload);
    }

    const handleEmail = (e) =>{
        let payload = {value: e.target.value, error: null};
        if(e.target.value.length < 2 && e.target.value.length > 0){
            payload["error"] = "Email must be at least 2 letters";
        }else{
            payload["error"] = "";
        }
        e.target.value = payload.value;
        handleChange(e, payload);
    }

    const handlePassword = (e) =>{
        let payload = {value: e.target.value, error: null};
        if(e.target.value.length < 8 && e.target.value.length > 0){
            payload["error"] = "Password must be at least 8 letters";
        }else{
            payload["error"] = "";
        }
        e.target.value = payload.value;
        handleChange(e, payload);
    }

    const handleConfirmPassword = (e) =>{
        let payload = {value: e.target.value, error: null};
        if(e.target.value !== state.password.value && e.target.value.length > 0){
            payload["error"] = "Passwords do not match";
        }else{
            payload["error"] = "";
        }
        e.target.value = payload.value;
        handleChange(e, payload);
    }

    return (  
        <div className="container">
            <div className="row my-2 justify-content-center">
                <div className="col-6">
                    <div className= {"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3">First Name</label>
                        <input name="firstName" type="text" value={state.firstName.value} onChange={ e => handleFirstName(e)}/>
                    </div>
                    {
                        state.firstName.error ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {state.firstName.error}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3">Last Name</label>
                        <input name="lastName" type="text" value={state.lastName.value} onChange={ e => handleLastName(e)}/>
                    </div>
                    {
                        state.lastName.error ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {state.lastName.error}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3">Email</label>
                        <input name="email" type="email" value={state.email.value} onChange={ e => handleEmail(e)}/>
                    </div>
                    {
                        state.email.error ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {state.email.error}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3">Password</label>
                        <input name="password" type="password" value={state.password.value} onChange={ e=> handlePassword(e)}/>
                    </div>
                    {
                        state.password.error ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {state.password.error}
                        </div>
                        :
                        ""
                    }
                    {
                        state.confirmPassword.error ? 
                        <div className= "row py-2 my-2 justify-content-center text-danger">
                            {state.confirmPassword.error}
                        </div>
                        :
                        ""
                    }
                    <div className={"row py-2 my-2 justify-content-center " + styles.inputRow}>
                        <label className="col-3">Confirm Password</label>
                        <input name="confirmPassword" type="password" value={state.confirmPassword.value} onChange = { e => handleConfirmPassword(e)}/>
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
                        <div className="col-9">{state.firstName.value}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Last Name</div>
                        <div className="col-9">{state.lastName.value}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Email</div>
                        <div className="col-9">{state.email.value}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Password</div>
                        <div className="col-9">{state.password.value}</div>
                    </div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-3">Confirm Password</div>
                        <div className="col-9">{state.confirmPassword.value}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserForm;