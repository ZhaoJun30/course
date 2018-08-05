import * as TYPES from '../action-types';

let INIT_STATE = {
    userInfo: null
};
export default function person(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    let result = {};
    switch (action.type) {
        case TYPES.QUERY_USER_INFO:
            result = action.payload;
            if (parseFloat(result.code) === 0) {
                state.userInfo = result.data
            }else{
                state.userInfo=null;
            }
            break;
    }
    return state;
};