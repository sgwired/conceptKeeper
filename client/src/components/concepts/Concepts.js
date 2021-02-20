import React, { Fragment, useContext } from 'react';
import ConceptContext from '../../context/concept/conceptContex';
import ConceptState from '../../context/concept/ConceptState';
import ConceptItems from '../concepts/ConceptItem';

function Concepts() {
  const conceptContext = useContext(ConceptContext);

  const { concepts } = conceptContext;

  return (
    <Fragment>
      {concepts.map((concept) => (
        <ConceptItems key={concept.id} concept={concept} />
      ))}
    </Fragment>
  );
}

export default Concepts;
