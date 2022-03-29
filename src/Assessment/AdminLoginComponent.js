import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";


export default function AdminLoginComponent() {

    const [users, setUsers] = useState([]);
    const [userdetails, setUserDetails] = useState({ 'Email': '', 'Password': '' });
    const [errMsg, setErrMsg] = useState('');  
    const history = useHistory();
    const [Cookies, setCookie] = useCookies(['email']);

     useEffect(()=>{
         axios.get("http://127.0.0.1:9090/getadmin")
         .then(response =>{
         setUsers(response.data);
         })
     },[])

    function handleEmail(e) {
        setUserDetails({
            Email: e.target.value,
            Password: userdetails.Password
        })
    }
    function handlePassword(e) {
        setUserDetails({
            Email: userdetails.Email,
            Password: e.target.value
        })
    }
    function handleLoginClick(e) {
        e.preventDefault();
      for (var user of users)
      {
          if(user.Email == userdetails.Email && user.Password == userdetails.Password){
             setCookie('email' , user.Email,{path:"/"});
            history.push("/admindashboard");
            alert("valid EmailId");
          }else{
              setErrMsg("Invalid Cradentials");
              
          }
      }
    }
    return (
        <div>
            <h2>Admin Login</h2>
            <form>
                <dl>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={handleEmail} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePassword} /></dd>
                </dl>
                <button className="btn btn-primary" onClick={handleLoginClick}>Login</button>
              
                <hl className="text-center text-danger">{errMsg}</hl>
            </form>
        </div>
    )
}