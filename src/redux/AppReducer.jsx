export const initialState = {
   loginStatus: false,
   token: "",
   registrationStatus: false
}

export const appReducer = (state = initialState, action ) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state, loginStatus: action.payload.loginStatus, token: action.payload.token }
        case 'REGISTER':
            return {...state, registrationStatus: action.payload}    

            default: 
            return state;
    }
}
