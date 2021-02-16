const initialState = {
    html: "",
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
      case 'GET_EXPRESS_SUCCESS':
        return{
            html: action.payload,
      };
      default:
        return state;
  }
}
