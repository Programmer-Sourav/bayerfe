import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "./remoteapis/remote-api-interaction";

export default function Login(){

    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    

    const {loginStatus } = useSelector((state)=>state)

    const onBtnClick = () =>{
        const loginItem = {username: userEmail, password: password}
        loginUser(userEmail, password, dispatch)
    }

    return(
        <div> 
            <input type = "text" placeholder="Enter Email" onChange={(e)=>{setUserEmail(e.target.value)}} />
            <input type= "text" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={onBtnClick}>Login</button>

        </div>
    )
}