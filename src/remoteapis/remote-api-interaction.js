import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getUser() {
    try {
        const userUrl = `${BASE_URL}/user/details`
        const response = await axios.get(userUrl); 
        console.log(response.data);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}


export async function loginUser(username, password, dispatch) {
    const dataBody = { email: username, password: password };
     const loginUrl = `${BASE_URL}/user/login`
    try {
        const response = await axios.post(loginUrl, dataBody); 
        console.log(response.data);

        const dataReceived = { loginStatus: "Success", token: "xyz123" }; 
        dispatch({ type: "LOGIN", payload: dataReceived });
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

export async function signUpUser(nameOfUser, username, password, userType, dispatch){
    const dataBody = {name: nameOfUser, email: username, password: password, userType: userType}
    const signupUrl = `${BASE_URL}/user/signup`
    try{
       const response = await axios.post(signupUrl, dataBody)
       const data = response.data;
       dispatch({type: "REGISTER", payload: "Some Data"})
    }
    catch(error){
      console.error("Error "+ error.message);
    }
}

export async function someFunctionality(username, password, token) {
    const dataBody = { username, password };

    try {
        const response = await axios.post("", dataBody, { 
            headers: { "Authorization": token } 
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}
