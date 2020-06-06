import React, {Component} from 'react';
import User from "../../Components/user/user";
import InterlocutorMessage from "../../Components/interlocutor-message/interlocutor-message";
import moment from "moment";
import "./chat.css"
import MyMessage from "../../Components/my-message/my-message";

class Chat extends Component {
    state = {
        message: ''
    };
    divWithScroll = React.createRef();
    onInputChange = (event) => {
        this.setState({message: event.target.value})
    };
    onEnterDown = (event) => {
        if (event.key === 'Enter') {
            this.onSendingMessage(this.state.message)
        }
    };
    onSendingMessage = (message) => {
        if (this.state.message !== '') {
            this.props.sendMessage({
                text: message,
                chatId: this.props.data.id,
                id: 'my-message',
                date: moment(new Date()).format('LLL')
            });
            this.props.getMessage(this.props.data.id);
            this.setState({message: ''})
        } else alert("message can't be empty")
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.divWithScroll.current.scrollTop = this.divWithScroll.current.scrollTopMax;
    }

    render() {
        const {data} = this.props;
        return (

            <div className='chat' onKeyPress={(event) => this.onEnterDown(event)}>
                <div className='chat-header'>
                    <User data={data}/>
                </div>
                <div className='chatting-view' ref={this.divWithScroll}>
                    {getMessages(data.chatting, data.avatar)}
                </div>
                <div className='chat-footer'>
                    <div className='message-field'>
                        <input value={this.state.message} onChange={event => this.onInputChange(event)} type="text"
                               placeholder='Type your message'/>
                        <i className="fas fa-paper-plane" onClick={() => this.onSendingMessage(this.state.message)}></i>
                    </div>
                </div>
            </div>
        );
    }
}

const getMessages = (chatting, avatar) => {
    return chatting.map(message => {
        switch (message.id) {
            case 'my-message':
                return <MyMessage date={message.date} text={message.text}/>;
            case 'interlocutor-message':
                return <InterlocutorMessage avatar={avatar} date={message.date} text={message.text}/>;
            default:
                return null
        }
    })
};

export default Chat;