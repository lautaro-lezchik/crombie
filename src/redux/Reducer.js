

const initialState = {
value:30,
unit:'MIN',
pwr:false,
}

const myReducer = (state = initialState, action)=> {

    switch (action.type){
        case "SEND_VALUE":

            return {
                ...state,
                value:action.payload
            }
        case "SEND_UNIT":
            const unit = state.unit===initialState.unit ? "HRS" : "MIN"

            return {
                ...state,
                unit
            }
        case "POWER":

            return {
                ...state,
                pwr: !state.pwr
            }
        case "DECREASE_TIME":
            const newValue= state.value-1
            return {
                ...state,
                value:newValue
            }
        case "INCREASE_TIME":
            const incValue= state.value+1
            return {
                ...state,
                value:incValue
            }

        default:
            return initialState
    }
    
}

export default myReducer;