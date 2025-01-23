import { FETCH_SECRET_FILES } from "./actions-files";

const initialState = {
  secretFiles: [],
  secretFile: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SECRET_FILES:
      return {
        ...state,
        secretFiles: action.payload,
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer;
