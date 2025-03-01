export const initialState = {
   loginStatus: false,
   token: ""
}

export const appReducer = (state = initialState, action ) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state, loginStatus: "", token: "" }
        case 'REGISTER':
            return {...state, loginStatus: "", token: ""}    

            default: 
            return state;
    }
}
