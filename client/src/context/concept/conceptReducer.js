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
    case DELETE_CONCEPT:
      return {
        ...state,
        concepts: state.concepts.filter(
          (concept) => concept.id !== action.payload
        ),
      };

    case UPDATE_CONCEPT:
      return {
        state,
        concepts: state.concepts.map((concept) =>
          concept.id === action.payload.id ? action.payload : concept
        ),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case FILTER_CONCEPTS:
      return {
        ...state,
        filtered: state.concepts.filter((concept) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return concept.title.match(regex) || concept.description.match(regex);
        }),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
