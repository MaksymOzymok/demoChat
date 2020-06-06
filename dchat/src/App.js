import React, {Component} from 'react';
import {connect} from "react-redux"
import Chat from "./Layouts/chat/chat";
import ChattingList from "./Layouts/chatting-list/chatting-list";
import {changeFilter, getMessage, selectItem, sendMessage} from "./redux/actions";
import "./index.css"

class App extends Component {

    onFilterData = (filterValue, data) => {
        return data.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
    };

    render() {
        const {filter, data, selectedItemIndex, selectItem, sendMessage, getMessage, changeFilter} = this.props;
        const filteredData = this.onFilterData(filter, data);
        return (
            <div className="app">
                <ChattingList data={filteredData}
                              onSelectItem={selectItem}
                              onChangeFilter={changeFilter}
                              selectedItemIndex={selectedItemIndex}/>
                <Chat data={data[selectedItemIndex]} sendMessage={sendMessage} getMessage={getMessage}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectItem: (newId) => dispatch(selectItem(newId)),
        sendMessage: (message) => dispatch(sendMessage(message)),
        getMessage: (chatId) => dispatch(getMessage(chatId)),
        changeFilter: (newValue) => dispatch(changeFilter(newValue))
    }
};

const mapStateToProps = (store) => {
    return {
        data: store.data,
        selectedItemIndex: store.selectedItemIndex,
        filter: store.filter
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
