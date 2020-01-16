/**
 * @Author:hgq
 * @Describe:
 */
import {LOGIN} from "../actions/actionTypes";

const initState = {
    userName: '',
    password: '',
    token: false
};

const login = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: true
            };
        default:
            return state;
    }


};

export default login;
