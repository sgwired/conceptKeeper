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
  GET_CONCEPTS,
  CLEAR_ERRORS,
  CLEAR_CONCEPTS,
} from '../types';

const ConceptState = (props) => {
  const initialState = {
    concepts: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(conceptReducer, initialState);

  // Get Concepts
  const getConcepts = async () => {
    try {
      const res = await axios.get('/api/concepts');
      dispatch({ type: GET_CONCEPTS, payload: res.data });
    } catch (error) {
      dispatch({ type: CONCEPT_ERROR, payload: error.response.msg });
    }
  };

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
  const deleteConcept = async (id) => {
    try {
      await axios.delete(`/api/concepts/${id}`);
      dispatch({ type: DELETE_CONCEPT, payload: id });
    } catch (error) {
      dispatch({ type: CONCEPT_ERROR, payload: error.response.msg });
    }
  };

  // Update Concept
  const updateConcept = async (concept) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(
        `/api/concepts/${concept._id}`,
        concept,
        config
      );

      dispatch({ type: UPDATE_CONCEPT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONCEPT_ERROR, payload: 'there was an error' });
    }
  };

  // Clear concepts
  const clearConcepts = () => {
    dispatch({
      type: CLEAR_CONCEPTS,
    });
  };

  // Set current concept
  const setCurrent = (concept) => {
    dispatch({ type: SET_CURRENT, payload: concept });
  };

  // Clear current concept
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        getConcepts,
        clearConcepts,
      }}
    >
      {props.children}
    </ConceptContext.Provider>
  );
};

export default ConceptState;
