import { createStore } from "redux";

// Initial State
const initialState = {
  favoritesList: [],
  savedList: [],
};

// Reducer Function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload],
      };

      case "REMOVE_FAVOURITE":
        return {
          ...state,
          favoritesList: state.favoritesList.filter((item) => item.id !== action.payload),
        };
      
    case "ADD_SAVE":
      return {
        ...state,
        savedList: [...state.savedList, action.payload],
      };
      case "REMOVE_SAVE":
        return {
          ...state,
          savedList: state.savedList.filter((item) => item.id !== action.payload),
        };

    default:
      return state;
  }
};

// Create Store
const store = createStore(reducer);
export default store;
