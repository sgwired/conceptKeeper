import {
  ADD_CONCEPT,
  DELETE_CONCEPT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONCEPT,
  FILTER_CONCEPTS,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONCEPT:
      return {
        ...state,
        concepts: [...state.concepts, action.payload],
      };
    default:
      return state;
  }
};
