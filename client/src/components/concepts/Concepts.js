import React, { Fragment, useContext, useEffect } from 'react';
import ConceptContext from '../../context/concept/conceptContext';
import ConceptItem from '../concepts/ConceptItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Spinner from '../layout/Spinner';

function Concepts() {
  const conceptContext = useContext(ConceptContext);

  const { concepts, filtered, getConcepts, loading } = conceptContext;

  useEffect(() => {
    getConcepts();
    // esling-disable-next-line
  }, []);
  if (concepts !== null && concepts.length === 0 && !loading) {
    return <h4>Please add a concept</h4>;
  }

  return (
    <Fragment>
      {concepts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((concept) => (
                <CSSTransition
                  key={concept._id}
                  timeout={500}
                  classNames='item'
                >
                  <ConceptItem concept={concept} />
                </CSSTransition>
              ))
            : concepts.map((concept) => (
                <CSSTransition
                  key={concept._id}
                  timeout={500}
                  classNames='item'
                >
                  <ConceptItem concept={concept} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
}

export default Concepts;
