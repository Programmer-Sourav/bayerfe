import axios from "axios";


export async function getUser() {
    try {
        const response = await axios.get(""); 
        console.log(response.data);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}


export async function loginUser(username, password, dispatch) {
    const dataBody = { username, password };

    try {
        const response = await axios.post("", dataBody); 
        console.log(response.data);

        const dataReceived = { loginStatus: "Success", token: "xyz123" }; 
        dispatch({ type: "LOGIN", payload: dataReceived });
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

// Handle some functionality with authentication
export async function someFunctionality(username, password, token) {
    const dataBody = { username, password };

    try {
        const response = await axios.post("", dataBody, { 
            headers: { "Authorization": token } // Use the token for authentication
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}
