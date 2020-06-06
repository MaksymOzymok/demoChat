import React, {Component} from 'react';
import "./chatting-list.css"
import Header from "./header/header";
import ChattingListItem from "../../Components/chatting-list-item/chatting-list-item";

class ChattingList extends Component {
    render() {

        return (
            <div className='chatting-list'>
                <Header onChangeFilter={this.props.onChangeFilter}/>
                <p className='chatting-list-header'>Chats</p>
                {
                    this.props.data.map(item => <ChattingListItem selectedItemIndex={this.props.selectedItemIndex}
                                                                  key={item.id} data={item}
                                                                  onSelectItem={this.props.onSelectItem}/>)
                }


            </div>
        );
    }
}


export default ChattingList;