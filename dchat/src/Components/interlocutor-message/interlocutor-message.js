import React from "react";
import "./interlocutor-message.css"

const InterlocutorMessage = ({date,text,avatar})=>{
    return(
        <div className='interlocutor-message'>
            <img className='message-avatar' src={avatar} alt="img"/>
            <div className='message-container'>
            <p className='message-text'>{text}</p>
            <span className='message-date'>{date}</span>
            </div>
        </div>
    );
};
export default InterlocutorMessage;