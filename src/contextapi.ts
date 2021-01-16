//initialState
export const initialState: {
    username: string;
} = {
    username: ''
}


//actionTypes
const SET_USERNAME : string = "SET_SEARCH_USERNAME";


//actions
export const settingUsername = (input: string) => {
    return {
        type: SET_USERNAME,
        username: input
    }
}


//reducer
export function reducer(state = initialState, action: any) {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            }

    
        default:
            return state;
    }
}