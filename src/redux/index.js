import { initialItems } from "./initialItems";

const ADD_ITEM = "ADD_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

const initialState = {
  items: initialItems,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case REMOVE_ITEM:
      const newItemArr = state.items.filter(
        (item) => item.id !== parseInt(action.payload)
      );
      return { ...state, items: newItemArr };
    default:
      return state;
  }
};

export default reducer;
