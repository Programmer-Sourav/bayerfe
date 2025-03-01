import React, { useState } from "react";
import { signUpUser } from "../remoteapis/remote-api-interaction";
import { useDispatch, useSelector } from "react-redux";

const RegisterPage = () => {

  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("p")

    const dispatch = useDispatch();
    

    const {loginStatus } = useSelector((state)=>state)

    const onBtnClick = () =>{
        const loginItem = {username: userEmail, password: password}
        signUpUser(username, userEmail, password, dispatch)
    }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md space-y-6">
        {/* Logo/Title */}
        <img
          class="mx-auto"
          alt="Bayer Logo in SVG Vector or PNG File Format"
          id="dimg_ibLCZ7KuGtHZ1e8P1P-BsAQ_11"
          src="data:image/jpeg;base64,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"
          data-csiid="ibLCZ7KuGtHZ1e8P1P-BsAQ_3"
          data-atf="1"
        />

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Register
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="float-left text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="user"
                value={username}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                            focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Create your user name"
                onChange={(e)=>{setUsername(e.target.value)}}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="float-left text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={userEmail}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                            focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Enter your email"
                onChange={(e)=>setUserEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="float-left text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                            focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Enter your password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <label>
             <input type="radio" checked={selectedRadioBtn.includes("p")} onChange={()=>{setSelectedRadioBtn("p")}}/>
             Patient
             </label>
             <label>
             <input type="radio" checked={selectedRadioBtn.includes("hp")} onChange={()=>{setSelectedRadioBtn("hp")}}/>
             Service Provider
             </label>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md 
                          hover:bg-blue-700 transition-colors duration-200"
                          onClick={onBtnClick}
            >
              Login
            </button>
          </div>

          <div className="text-center space-y-4">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Forgot Password?
            </a>

            <p className="text-sm text-gray-600">
              New User?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
