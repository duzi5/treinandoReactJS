
const initialState = {
  min: 1,
  max: 10,
};

export default function Reducers(state = initialState, action) {
  switch (action.typename) {
    case "ALTERNA_NUM_MIN":
      return {
        ...state.num,
        min: action.payload,
      };
    case "ALTERNA_NUM_MAX":
      return {
        ...state.num,
        max: action.payload,
      };
    default:
      return state;
  }
}
