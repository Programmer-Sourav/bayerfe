import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getUser(dispatch) {
    try {
        const token = localStorage.getItem("loginToken")
        const userUrl = `${BASE_URL}/user/details`
        const response = await axios.get(userUrl,{ 
            headers: { "authorization": `Bearer ${token}` } 
        });
        console.log(response.data);
        // const statusCode = response.status;
        // if(statusCode===200){
        //     const data = response.data;
        //     const diseases =  data. diseases;
        //     const goalName = data.goals.name;
        //     const goalExpected = data.goals.expected;
        //     const goalUnit = data.goals.unit;
        //     const goalValue = data.goals.value;
        //     const dataReceived = {diseases: diseases, goalName:goalName,goalExpected:goalExpected, goalUnit:goalUnit, goalValue: goalValue  };
        //     dispatch({type: "PATIENT_DETAILS", payload: dataReceived })
        // }
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
        const data = response.data;
        const statusCode = response.status;
        if(statusCode===200){
         const message = data.message;
         console.log(message)
         const dataReceived = { loginStatus: true, token: data.token }; 
         dispatch({type: "LOGIN", payload: dataReceived})
         localStorage.setItem("loginToken",token )
        }
        else{
            dispatch({ type: "LOGIN", payload: dataReceived });
        }
       
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

export async function signUpUser(nameOfUser, username, password, userType, dispatch){
    const dataBody = {name: nameOfUser, email: username, password: password, userType: userType}
    const signupUrl = `${BASE_URL}/user/signup`
    console.log(111, signupUrl)
    try{
       const response = await axios.post(signupUrl, dataBody);
       const data = response.data;
       const statusCode = response.status;
       if(statusCode===200){
        const message = data.message;
        console.log(message)
        dispatch({type: "REGISTER", payload: true})
       }
       else{
        console.log("Some error occured!")
        dispatch({type: "REGISTER", payload: false})
       }
       
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
