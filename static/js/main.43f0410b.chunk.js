(this.webpackJsonpdchat=this.webpackJsonpdchat||[]).push([[0],{28:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),i=a(3),m=a(4),o=a(6),l=a(5),u=a(10),d=(a(39),function(e){var t=e.data;return void 0!==t?r.a.createElement("div",{className:"user"},r.a.createElement("img",{className:"avatar",src:t.avatar,alt:""}),r.a.createElement("i",{className:"far fa-check-circle"}),r.a.createElement("span",{className:"name"},t.name)):null}),p=(a(40),function(e){var t=e.date,a=e.text,n=e.avatar;return r.a.createElement("div",{className:"interlocutor-message"},r.a.createElement("img",{className:"message-avatar",src:n,alt:"img"}),r.a.createElement("div",{className:"message-container"},r.a.createElement("p",{className:"message-text"},a),r.a.createElement("span",{className:"message-date"},t)))}),g=a(9),h=a.n(g),f=(a(42),a(43),function(e){var t=e.text,a=e.date;return r.a.createElement("div",{className:"my-message"},r.a.createElement("div",{className:"message-container"},r.a.createElement("p",{className:"message-text  my-ms"},t),r.a.createElement("span",{className:"message-date my-ms-date"},a)))}),E=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={message:""},e.divWithScroll=r.a.createRef(),e.onInputChange=function(t){e.setState({message:t.target.value})},e.onEnterDown=function(t){"Enter"===t.key&&e.onSendingMessage(e.state.message)},e.onSendingMessage=function(t){""!==e.state.message?(e.props.sendMessage({text:t,chatId:e.props.data.id,id:"my-message",date:h()(new Date).format("LLL")}),e.props.getMessage(e.props.data.id),e.setState({message:""})):alert("message can't be empty")},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){this.divWithScroll.current.scrollTop=this.divWithScroll.current.scrollTopMax}},{key:"render",value:function(){var e=this,t=this.props.data;return r.a.createElement("div",{className:"chat",onKeyPress:function(t){return e.onEnterDown(t)}},r.a.createElement("div",{className:"chat-header"},r.a.createElement(d,{data:t})),r.a.createElement("div",{className:"chatting-view",ref:this.divWithScroll},v(t.chatting,t.avatar)),r.a.createElement("div",{className:"chat-footer"},r.a.createElement("div",{className:"message-field"},r.a.createElement("input",{value:this.state.message,onChange:function(t){return e.onInputChange(t)},type:"text",placeholder:"Type your message"}),r.a.createElement("i",{className:"fas fa-paper-plane",onClick:function(){return e.onSendingMessage(e.state.message)}}))))}}]),a}(n.Component),v=function(e,t){return e.map((function(e){switch(e.id){case"my-message":return r.a.createElement(f,{date:e.date,text:e.text});case"interlocutor-message":return r.a.createElement(p,{avatar:t,date:e.date,text:e.text});default:return null}}))},y=E,S=(a(44),a(45),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e.onInputChange=function(t){e.props.onChangeFilter(t.target.value),e.setState({filter:t.target.value})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"user-header"},r.a.createElement("img",{className:"avatar-header",src:"https://randomuser.me/api/portraits/men/22.jpg",alt:""}),r.a.createElement("i",{className:"far fa-check-circle"}),r.a.createElement("span",{className:"name-header"},"Maksym Ozymok")),r.a.createElement("input",{value:this.state.filter,onChange:function(t){return e.onInputChange(t)},className:"search",type:"search",placeholder:"Search or start new chat"}))}}]),a}(r.a.Component)),j=(a(46),function(e){var t=e.data,a=e.onSelectItem,n=e.selectedItemIndex,s=t.id,c=t.name,i=t.avatar,m=t.chatting,o="chatting-list-item";return s===n&&(o+=" selected"),r.a.createElement("div",{className:o,onClick:function(){return a(s)}},r.a.createElement("img",{className:"avatar-item",src:i,alt:"avatar"}),r.a.createElement("i",{className:"far fa-check-circle icon"}),r.a.createElement("span",{className:"name-item"},c),m.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"date-item"},m[m.length-1].date),r.a.createElement("p",{className:"message-item"},N(m[m.length-1].text))):null)}),N=function(e){for(var t="",a=0;a<100;a++)void 0!==e[a]&&(t+=e[a]);return t+"..."};j.defaultProps={name:"Name",avatar:"https://randomuser.me/api/portraits/men/22.jpg"};var I=j,b=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"chatting-list"},r.a.createElement(S,{onChangeFilter:this.props.onChangeFilter}),r.a.createElement("p",{className:"chatting-list-header"},"Chats"),this.props.data.map((function(t){return r.a.createElement(I,{selectedItemIndex:e.props.selectedItemIndex,key:t.id,data:t,onSelectItem:e.props.onSelectItem})})))}}]),a}(n.Component),O=a(24),x=a.n(O),M=(a(64),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onFilterData=function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},e}return Object(m.a)(a,[{key:"render",value:function(){console.log(this.props.filter);var e=this.props,t=e.filter,a=e.data,n=e.selectedItemIndex,s=e.selectItem,c=e.sendMessage,i=e.getMessage,m=e.changeFilter,o=this.onFilterData(t,a);return r.a.createElement("div",{className:"app"},r.a.createElement(b,{data:o,onSelectItem:s,onChangeFilter:m,selectedItemIndex:n}),r.a.createElement(y,{data:a[n],sendMessage:c,getMessage:i}))}}]),a}(n.Component)),C=Object(u.b)((function(e){return{data:e.data,selectedItemIndex:e.selectedItemIndex,filter:e.filter}}),(function(e){return{selectItem:function(t){return e(function(e){return{type:"SELECT_ITEM",payload:e}}(t))},sendMessage:function(t){return e(function(e){return{type:"SEND_MESSAGE",payload:e}}(t))},getMessage:function(t){return e(function(e){return function(t){t({type:"GET_MESSAGE_REQUEST"}),x()({method:"get",url:"https://api.chucknorris.io/jokes/random"}).then((function(a){var n={chatId:e,id:"interlocutor-message",text:a.data.value,date:h()(new Date).format("LLL")};setTimeout((function(){return t({type:"GET_MESSAGE_SUCCESS",payload:n})}),1500)}))}}(t))},changeFilter:function(t){return e(function(e){return{type:"CHANGE_FILTER",payload:e}}(t))}}}))(M),k=a(7),L=a(25),T=a(26),w=a(2),_=a(27),A=function(e,t){return e.map((function(e){return t.chatId===e.id?(e.chatting=[].concat(Object(_.a)(e.chatting),[t]),e):e}))},F={filter:"",selectedItemIndex:0,data:[{id:0,name:"name name",avatar:"https://randomuser.me/api/portraits/men/22.jpg",chatting:[{id:"my-message",text:"Lorem ipsum dolor sit amet",date:"June 5, 2020 2:32 PM"},{id:"my-message",text:"Lorem ipsum dolor sit amet",date:"June 5, 2020 2:32 PM"},{id:"my-message",text:"Lorem ipsum dolor sit amet",date:"June 5, 2020 2:32 PM"},{id:"interlocutor-message",text:"Lorem ipsum dolor sit amet",date:"June 5, 2020 2:32 PM"}]},{id:1,name:"Frank Arni",avatar:"https://randomuser.me/api/portraits/men/72.jpg",chatting:[{id:"my-message",text:"Lorem ipsum dolor sit amet",date:"June 5, 2020 2:32 PM"},{id:"my-message",text:" sit amet",date:"June 5, 2020 2:32 PM"},{id:"my-message",text:"Lorem t",date:"June 5, 2020 2:32 PM"},{id:"interlocutor-message",text:"Lorem ipsum dolor sit a  sdfssdf met",date:"June 5, 2020 2:32 PM"}]},{id:2,name:"John Vasyl",avatar:"https://randomuser.me/api/portraits/men/81.jpg",chatting:[]},{id:3,name:"Sofia Biletska",avatar:"https://randomuser.me/api/portraits/women/68.jpg",chatting:[]},{id:4,name:"Taras Renil",avatar:"https://randomuser.me/api/portraits/men/0.jpg",chatting:[]}]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_ITEM":return Object(w.a)(Object(w.a)({},e),{},{selectedItemIndex:t.payload});case"SEND_MESSAGE":return Object(w.a)(Object(w.a)({},e),{},{data:A(e.data,t.payload)});case"GET_MESSAGE_REQUEST":return Object(w.a)({},e);case"GET_MESSAGE_SUCCESS":return Object(w.a)(Object(w.a)({},e),{},{data:A(e.data,t.payload)});case"CHANGE_FILTER":return Object(w.a)(Object(w.a)({},e),{},{filter:t.payload});default:return Object(w.a)({},e)}},J=Object(k.createStore)(G,Object(T.composeWithDevTools)(Object(k.applyMiddleware)(L.a)));c.a.render(r.a.createElement(u.a,{store:J},r.a.createElement(C,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.43f0410b.chunk.js.map