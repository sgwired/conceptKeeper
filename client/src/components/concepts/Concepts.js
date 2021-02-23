import React, { Fragment, useContext } from 'react';
import ConceptContext from '../../context/concept/conceptContext';
import ConceptItem from '../concepts/ConceptItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Concepts() {
  const conceptContext = useContext(ConceptContext);

  const { concepts, filtered } = conceptContext;

  if (concepts.length === 0) {
    return <h4>Please add a concept</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((concept) => (
              <CSSTransition key={concept._id} timeout={500} classNames='item'>
                <ConceptItem concept={concept} />
              </CSSTransition>
            ))
          : concepts.map((concept) => (
              <CSSTransition key={concept._id} timeout={500} classNames='item'>
                <ConceptItem concept={concept} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
}

export default Concepts;
