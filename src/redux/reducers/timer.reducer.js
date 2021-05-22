const timer = (state = 3595, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default: 
            return state;
    }
};

export default timer;