import initialState from '../store/initialState'

export default function reducer(state = initialState.lessonReady, action) {
  switch(action.type) {
  case 'GET_ZOOM_SUCCESS':
    return{
      ...state,
      ...action.payload,
  };
  default:
    return state;
}
}

