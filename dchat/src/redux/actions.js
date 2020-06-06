import axios from "axios"
import moment from "moment";

export const SELECT_ITEM = 'SELECT_ITEM';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';
export const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const selectItem = (newId) => {
    return {
        type: SELECT_ITEM,
        payload: newId
    }
};
export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
};
const getMessageRequest = () => {
    return {
        type: GET_MESSAGE_REQUEST
    }
};
const getMessageSuccess = (message) => {
    return {
        type: GET_MESSAGE_SUCCESS,
        payload: message
    }
};

export const getMessage = (chatId) => {
    return dispatch => {
        dispatch(getMessageRequest());
        axios({
            method: 'get',
            url: 'https://api.chucknorris.io/jokes/random'
        }).then(res => {
            const newObj = {
                chatId,
                id: 'interlocutor-message',
                text: res.data.value,
                date: moment(new Date()).format('LLL')
            };
            setTimeout(() => dispatch(getMessageSuccess(newObj)), 1500);
        });
    }
};
export const changeFilter = (newValue) => {
    return {
        type: CHANGE_FILTER,
        payload: newValue
    }
};
