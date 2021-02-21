import React, { Fragment, useContext } from 'react';
import ConceptContext from '../../context/concept/conceptContext';
import ConceptState from '../../context/concept/ConceptState';
import ConceptItems from '../concepts/ConceptItem';

function Concepts() {
  const conceptContext = useContext(ConceptContext);

  const { concepts, filtered } = conceptContext;

  if (concepts.length === 0) {
    return <h4>Please add a concept</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((concept) => (
            <ConceptItems key={concept.id} concept={concept} />
          ))
        : concepts.map((concept) => (
            <ConceptItems key={concept.id} concept={concept} />
          ))}
    </Fragment>
  );
}

export default Concepts;
