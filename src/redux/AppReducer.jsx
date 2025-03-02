export const initialState = {
   loginStatus: false,
   token: "",
   registrationStatus: false,
//    userDetails: {
//     diseases: "",
//     goalName: "",
//     goalExpected: "",
//     goalUnit: "",
//     goalValue: ""
//    }
}

export const appReducer = (state = initialState, action ) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state, loginStatus: action.payload.loginStatus, token: action.payload.token }
        case 'REGISTER':
            return {...state, registrationStatus: action.payload} 
        // case "PATIENT_DETAILS":
        //     return {...state, userDetails : {...state.userDetails, diseases: action.payload.diseases, goalName: action.payload.goalName, goalExpected: action.payload.goalExpected, goalUnit: action.payload.goalUnit, goalValue: action.payload.goalValue }}       

            default: 
            return state;
    }
}
