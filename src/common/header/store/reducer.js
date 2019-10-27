import * as constants from './constants';
import { fromJS } from 'immutable';

// 变成immutable对象不可修改

const defaultState = fromJS({
    focused: false,
    hotList: []
});

export default (state = defaultState, action) => {

    // const newState = JSON.parse(JSON.stringify(state));

    switch(action.type) {
        case constants.SEARCH_FOCUS:
            // newState.focused = true;
            // return newState;
            // set会返回一个新的对象不会修改原来的数据
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
             // newState.focused = false;
            // return newState;
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('hotList', action.data);
        default:
            return state;
    }    
}