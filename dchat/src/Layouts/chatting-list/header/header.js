import React from "react";
import "./header.css"

export default class Header extends React.Component {
    state = {
        filter: ''
    };
    onInputChange = (event) => {
        this.props.onChangeFilter(event.target.value);
        this.setState({filter: event.target.value});
    };

    render() {
        return (
            <div className='header'>
                <div className='user-header'>
                    <img className='avatar-header' src='https://randomuser.me/api/portraits/men/22.jpg' alt=""/>
                    <i className="far fa-check-circle"></i>
                    <span className='name-header'>Maksym Ozymok</span>
                </div>
                <input value={this.state.filter} onChange={event => this.onInputChange(event)} className='search'
                       type="search" placeholder={`Search or start new chat`}/>
            </div>
        )
    }
};

