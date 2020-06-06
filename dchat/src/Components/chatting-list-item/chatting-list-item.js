import React from "react";
import "./chatting-list-item.css"

const ChattingListItem = ({data,onSelectItem,selectedItemIndex}) => {
      const {id,name,avatar,chatting} = data;
      let itemClassName = 'chatting-list-item';
      if(id===selectedItemIndex) itemClassName+= ' selected';
          return (
              <div className={itemClassName} onClick={() => onSelectItem(id)}>
                  <img className='avatar-item' src={avatar} alt="avatar"/>
                  <i className="far fa-check-circle icon"></i>
                  <span className='name-item'>{name}</span>
                  { chatting.length>0? <><span className='date-item'>{chatting[chatting.length - 1].date}</span>
                  <p className='message-item'>{makeShortMessage(chatting[chatting.length - 1].text)}</p>
                  </>:null}
              </div>
          )
};
const makeShortMessage = (text)=>{
    let newStr = '';
    for(let i=0;i<100;i++){
        if(text[i]!==undefined)
        newStr+=text[i];
    }
    return newStr + '...'
};
ChattingListItem.defaultProps = {
    name: 'Name',
    avatar : 'https://randomuser.me/api/portraits/men/22.jpg',
};
export default ChattingListItem