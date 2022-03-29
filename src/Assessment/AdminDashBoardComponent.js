import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AdminDashBoardComponent() {
    const [cookies, setCookie, removeCookie] = useCookies(['email']);
    const history = useHistory();

useEffect(()=>{
    if(cookies.email==undefined){
        history.push("/adminlogin");
    }
})

    function handleSignout() {
        removeCookie('email');
        History.push("/adminlogin");
    }
    return (
        <div>
            <h2>Admin Dashboard-{cookies.email}
                <button className="btn btn-link" onClick={handleSignout}>signout</button>
            </h2>
        </div>
    )
}