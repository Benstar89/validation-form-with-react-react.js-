import React ,{useState ,useEffect}from "react";
import styled from "../styles/Signup.module.css";
import { validate } from "./validate";
import {notify} from "./toast";
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {
    const [touched , setTouch] =  useState({}) 
    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword : "",
        isAccepted: false,
    })
    const [errors , setErrors] = useState({})
    useEffect(() => {
        setErrors(validate(data))  
    },[data , touched])


    const changeHandler = (event) => {
        if(event.target.name === "isAccepted"){
            setData({...data , isAccepted : event.target.checked})
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
    }
    const focusHandler = event => {
        setTouch({...touched, [event.target.name]: true})
    }
    const submitHander = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("success")
        }else{
            notify("error")
            setTouch({
                name:true,
                email: true,
                password:true,
                confirmPassword:true,
                isAccepted : true,
            })
        }
    }

    return(
        <div>
            <form onSubmit={submitHander} className={styled.form}>
                <h1>Sign Up</h1>
                <div className={styled.name}>
                    <label>Name</label><br />
                    <input type = "text" value = {data.name} onChange = {changeHandler} name = "name"  onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div >
                    <label>Email</label><br />
                    <input type = "text" value = {data.email} onChange = {changeHandler} name = "email" onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label><br />
                    <input type = "text" value = {data.password} onChange = {changeHandler} name = "password" onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div> 
                <div>
                    <label>Confirm Password</label><br />
                    <input type = "text" value = {data.confirmPassword} onChange = {changeHandler} name = "confirmPassword" onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styled.radiusinput}>
                    <label>I accept term of privacy policy</label>
                    <input type = "checkbox" value = {data.isAccepted} onChange = {changeHandler} name = "isAccepted" onFocus={focusHandler}/> <br />
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styled.buttons}>
                    <a href = "#" className={styled.login}>Login</a>
                    <button className={styled.signUp} type = "submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup;