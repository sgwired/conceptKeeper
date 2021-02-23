import React, { useReducer } from 'react';
import axios from 'axios';
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
  CONCEPT_ERROR,
} from '../types';

const ConceptState = (props) => {
  const initialState = {
    concepts: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(conceptReducer, initialState);

  // Add concept
  const addConcept = async (concept) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/concepts/', concept, config);
      dispatch({ type: ADD_CONCEPT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONCEPT_ERROR, payload: error.response.msg });
    }
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
        error: state.error,
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
