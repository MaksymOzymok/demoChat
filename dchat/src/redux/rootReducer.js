import {CHANGE_FILTER, GET_MESSAGE_REQUEST, GET_MESSAGE_SUCCESS, SELECT_ITEM, SEND_MESSAGE} from "./actions";
import {getNewData} from "./helpers";

const initialState = {
    filter: '',
    selectedItemIndex: 0,
    data: [

        {
            id: 0,
            name: 'name name',
            avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
            chatting: [
                {
                    id: 'my-message',
                    text: 'Lorem ipsum dolor sit amet',
                    date: 'June 5, 2020 2:32 PM'
                },
                {
                    id: 'my-message',
                    text: 'Lorem ipsum dolor sit amet',
                    date: 'June 5, 2020 2:32 PM'
                }, {
                    id: 'my-message',
                    text: 'Lorem ipsum dolor sit amet',
                    date: 'June 5, 2020 2:32 PM'
                },
                {
                    id: 'interlocutor-message',
                    text: 'Lorem ipsum dolor sit amet',
                    date: 'June 5, 2020 2:32 PM'
                }

            ]
        },
        {
            id: 1,
            name: 'Frank Arni',
            avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
            chatting: [
                {
                    id: 'my-message',
                    text: 'Lorem ipsum dolor sit amet',
                    date: 'June 5, 2020 2:32 PM'
                },
                {
                    id: 'my-message',
                    text: ' sit amet',
                    date: 'June 5, 2020 2:32 PM'
                }, {
                    id: 'my-message',
                    text: 'Lorem t',
                    date: 'June 5, 2020 2:32 PM'
                },
                {
                    id: 'interlocutor-message',
                    text: 'Lorem ipsum dolor sit a  sdfssdf met',
                    date: 'June 5, 2020 2:32 PM'
                }

            ]
        },
        {
            id: 2,
            name: 'John Vasyl',
            avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
            chatting: []
        },
        {
            id: 3,
            name: 'Deni Rem',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            chatting: []
        },
        {
            id: 4,
            name: 'Taras Renil',
            avatar: 'https://randomuser.me/api/portraits/men/0.jpg',
            chatting: []
        }
    ]
};

const rootReducer = (store = initialState, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return {...store, selectedItemIndex: action.payload};
        case SEND_MESSAGE:
            return {...store, data: getNewData(store.data, action.payload)};
        case GET_MESSAGE_REQUEST:
            return {...store};
        case GET_MESSAGE_SUCCESS:
            return {...store, data: getNewData(store.data, action.payload)};
        case CHANGE_FILTER:
            return {...store, filter: action.payload};
        default:
            return {...store}
    }

};
export default rootReducer;