const initialState = {
  likeCount: 0,
};

const LikeCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        likeCount: state.likeCount + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        likeCount: Math.max(0, state.likeCount - 1),
      };
    default:
      return state;
  }
};

export default LikeCountReducer;