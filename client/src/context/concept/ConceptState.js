import React, { useReducer } from 'react';
import uuid from 'uuid';
import ConceptContext from './conceptContex';
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
  };

  const [state, dispatch] = useReducer(conceptReducer, initialState);

  // Add concept

  // Delete concept

  // Set current concept

  // Clear current concept

  // Update Concept

  // Filter Concepts

  // Clear Filter

  return (
    <ConceptContext.Provider
      value={{
        concepts: state.concepts,
      }}
    >
      {props.children}
    </ConceptContext.Provider>
  );
};

export default ConceptState;
