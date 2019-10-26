const initialState = {
  count: 0,
  valueInput: 0,
  clicks: 0
};


function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
      case 'INPUT_VALUE_CHANGE':
      return{
        ...state,
        valueInput: action.number
      };
      
    case 'INPUT_VALUE':
      return {
        ...state,
        count: parseInt(state.valueInput),
        valueInput: state.valueInput
      };
    
    default:
      return state;
  }
}


export default counterReducer;