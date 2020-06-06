export const getNewData = (data, messageData) => {
    return data.map(value => {
        if (messageData.chatId === value.id) {
            value['chatting'] = [...value.chatting, messageData];
            return value;
        } else return value;
    });
};