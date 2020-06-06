import React from "react";
import "./user.css"

const User = ({data}) => {
    if (data !== undefined) {
        return (
            <div className='user'>
                <img className='avatar' src={data.avatar} alt=""/>
                <i className="far fa-check-circle"></i>
                <span className='name'>{data.name}</span>
            </div>
        )
    } else return null;
};
export default User;