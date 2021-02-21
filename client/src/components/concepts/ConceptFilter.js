import React, { useContext, useRef, useEffect } from 'react';

import ConceptContext from '../../context/concept/conceptContext';

export const ConceptFilter = () => {
  const conceptContext = useContext(ConceptContext);
  const text = useRef('');
  const { filterConcepts, clearFilter, filtered } = conceptContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterConcepts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filer Concepts...'
        onChange={onChange}
      />
    </form>
  );
};
export default ConceptFilter;
