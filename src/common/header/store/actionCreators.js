import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from "./constants";
import axios from 'axios';
import { fromJS } from 'immutable';


export const searchFocus = () => ({
    type: SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: SEARCH_BLUR
});

const changeList = (data) => ({
    type: CHANGE_LIST,
    data: fromJS(data)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.Data));
        }).catch(() => {
            console.log('error');
        })
    }
}