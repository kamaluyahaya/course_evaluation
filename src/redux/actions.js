// src/redux/actions.js
export const setData = (data) => ({
    type: 'SET_DATA',
    payload: data,
  });
  
  // src/redux/reducers.js
  const initialState = {
    data: null,
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  