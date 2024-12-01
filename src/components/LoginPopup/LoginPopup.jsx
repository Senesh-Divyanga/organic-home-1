import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import axios from 'axios';
import Swal from 'sweetalert2';


const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")


    const[name,setname] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    function showAlert(message) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: message
      });
    }

    function sendData(e){
      e.preventDefault();
      (name,email,password)

      const newUser={
        name,
        email,
        password
      }

      axios.post("http://localhost:5000/student/add",newUser).then(()=>{
        
        showAlert("Sign Up Success")
        
      }).catch((err)=>{
        alert("Failed to add account")
      })

    } 

    

  return (
    <div className='login-popup'>

      <form className="login-popup-container" onSubmit={sendData}>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' 
          onChange={(e)=>{
            setname(e.target.value)
          }
        }
          required/>}

          <input type="email" placeholder='Your Email'
          onChange={(e)=>{
            setEmail(e.target.value)
          }
        }
        required/>


        <input type="password" placeholder='Password' 
          onChange={(e)=>{
            setPassword(e.target.value)
          }
        }
        required/>

        </div>


        <button type="submit">{currState==="Sign Up"? "Create account": "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
      }
      </form>
    </div>
  )
}

export default LoginPopup
