import {
  ADD_CONCEPT,
  DELETE_CONCEPT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONCEPT,
  FILTER_CONCEPTS,
  CLEAR_FILTER,
  CONCEPT_ERROR,
  GET_CONCEPTS,
  CLEAR_CONCEPTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONCEPTS:
      return {
        ...state,
        concepts: action.payload,
        loading: false,
      };
    case ADD_CONCEPT:
      return {
        ...state,
        concepts: [action.payload, ...state.concepts],
        loading: false,
      };
    case DELETE_CONCEPT:
      return {
        ...state,
        concepts: state.concepts.filter(
          (concept) => concept._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_CONCEPTS:
      return {
        ...state,
        concepts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case UPDATE_CONCEPT:
      return {
        state,
        concepts: state.concepts.map((concept) =>
          concept.id === action.payload.id ? action.payload : concept
        ),
        loading: false,
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
    case CONCEPT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
