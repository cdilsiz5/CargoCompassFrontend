import React, { useState } from "react";
import Input from '../../Components/Input/Input';
import axios from "axios";
import heroBanner from '../../Components/Assets/hero-banner.jpg'
import {Navbar} from '../../Components/Navbar/Navbar'
import {Footer} from '../../Components/Footer/Footer'
import './Signup.css';

const Signup =(props)=>{
   const [form,setForm]=useState({
        userFirstName: null,
        userLastName: null,
        userPhoneNumber: null,
        userEmail: null,
        userPassword: null,
        userPasswordRepeat: null,
        pendingApiCall: false,
        userRole:null
    })
    const [errors,setErrors]=useState({});
    const [success,setSuccess]=useState(false);
   
    const onChange = event => {
        event.preventDefault();
        setSuccess(false);
        const { name, value } = event.target;
        const errorsCopy ={...errors};
        errorsCopy[name]=undefined;
       setErrors(errorsCopy)
       setForm((previousForm)=>({...previousForm,[name]:value}))
    }
   
    const onClickSignup = async event => {
        event.preventDefault();
        const { userFirstName, userLastName, userEmail, userPhoneNumber, userPassword,userGender } = form
        const body = {
            userFirstName: userFirstName,
            userLastName: userLastName,
            userEmail: userEmail,
            userPhoneNumber: userPhoneNumber,
            userPassword: userPassword ,
            userGender: userGender
        };
        try{
                       
            const response =await  axios.post(`http://35.229.96.170/api/auth/signup`, body)

            if(response.status===201){
                setSuccess(true)
            }
            
        }catch(error){
            if(error.response.data.validationErrors){
              setErrors(error.response.data.validationErrors)
            }
        }
    }
    const {userFirstName :userFirstNameError,userLastName:userLastNameError,userEmail:userEmailError,userPhoneNumber:userPhoneNumberError,userPassword:userPasswordError} =errors;
    let userPasswordRepeatError ;
    if(form.userPassword!==form.userPasswordRepeat){
        userPasswordRepeatError="Password Mismatch";
    }
    return (
        <div>
            <section style={{ backgroundImage: `url(${heroBanner})`}}>
            <Navbar></Navbar>
            <div className="signupForm">
            <form className="form-group" style={{marginTop:'150px',marginBottom:'75px'}} >
                <h1 >Sign Up</h1>
                <Input name="userFirstName" type="text" label="First Name" error={userFirstNameError} onChange={onChange}></Input>
                <Input name="userLastName"  type="text" label="Last Name" error={userLastNameError} onChange={onChange}></Input>
                <Input name="userEmail"  type="text" label="Email" error={userEmailError} onChange={onChange}></Input>
                <Input name="userPhoneNumber" type="text" label="Phone" error={userPhoneNumberError} onChange={onChange}></Input>
                <Input name="userPassword" type="password" label="Password" error={userPasswordError} onChange={onChange}></Input>
                <Input name="userPasswordRepeat" type="password" label="Password Repeat" error={userPasswordRepeatError} onChange={onChange}></Input>
               <div className="input">
                    <label>Role</label>
                    <div className="form-check row ">
                        <label className="form-check-label col-xl-4">
                            <input type="radio" className="form-check-input" name="userRole"  value="CARRIER"  onChange={onChange} /> CARRIER
                        </label>
                        <label className="form-check-label col-xl-4">
                            <input type="radio" className="form-check-input" name="userRole" value="FREIGHTER"  onChange={onChange}/> FREIGHTER
                        </label>
                    </div>
                </div>
                <div className="text-center" style={{marginLeft:'auto'}}>
                    <button disabled={userPasswordRepeatError!==undefined} className="btn" onClick={onClickSignup}>Sign Up</button>
                    {(success) && <div className="alert alert-success" role="alert">User Created</div>}    
                </div>
            </form>
            </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default Signup;