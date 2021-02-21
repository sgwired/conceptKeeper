import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ConceptContext from './conceptContext';
import conceptReducer from './conceptReducer';
import {
  ADD_CONCEPT,
  DELETE_CONCEPT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONCEPT,
  FILTER_CONCEPTS,
  CLEAR_FILTER,
} from '../types';

const ConceptState = (props) => {
  const initialState = {
    concepts: [
      {
        id: 1,
        title: 'First Concept',
        description: 'The description of the first concept',
        patent: 'no patent',
      },
      {
        id: 2,
        title: 'Second Concept',
        description: 'The description of the second concept',
        patent: 'has patent',
      },
      {
        id: 3,
        title: 'Third Concept',
        description: 'The description of the third concept',
        patent: 'has patent',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(conceptReducer, initialState);

  // Add concept
  const addConcept = (concept) => {
    concept.id = v4();
    dispatch({ type: ADD_CONCEPT, payload: concept });
  };

  // Delete concept
  const deleteConcept = (id) => {
    dispatch({ type: DELETE_CONCEPT, payload: id });
  };

  // Set current concept
  const setCurrent = (concept) => {
    dispatch({ type: SET_CURRENT, payload: concept });
  };

  // Clear current concept
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Concept
  const updateConcept = (concept) => {
    dispatch({ type: UPDATE_CONCEPT, payload: concept });
  };

  // Filter Concepts
  const filterConcepts = (text) => {
    dispatch({ type: FILTER_CONCEPTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ConceptContext.Provider
      value={{
        concepts: state.concepts,
        current: state.current,
        filtered: state.filtered,
        addConcept,
        deleteConcept,
        updateConcept,
        setCurrent,
        clearCurrent,
        filterConcepts,
        clearFilter,
      }}
    >
      {props.children}
    </ConceptContext.Provider>
  );
};

export default ConceptState;
