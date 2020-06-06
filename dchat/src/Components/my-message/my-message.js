import React from "react";
import "./my-message.css"

const MyMessage = ({text,date})=>{
    return(
        <div className='my-message'>
        <div className='message-container'>
            <p className='message-text  my-ms'>{text}</p>
            <span className='message-date my-ms-date'>{date}</span>
        </div>
    </div>);
};
export default MyMessage;