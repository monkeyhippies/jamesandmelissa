const initialState = {
    app: null
};

const tabs = (state = initialState, action) => {
    switch (action.type) {
    case 'CHANGE_SELECTED_TAB':
        return {
            "app": action.tab
        }

    default:
        return state;
    }
}

export default tabs
