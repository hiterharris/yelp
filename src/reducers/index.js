const initialState = {
    isLoading: false,
    restaurantList: [],
    error: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RESTAURANT_LIST':
        return {
            ...state,
            restaurantList: action.payload
        }
        default:
            return state;
    }
};
