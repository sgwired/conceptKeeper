import React, { useState, useContext, useEffect } from 'react';
import ConceptContext from '../../context/concept/conceptContext';

export const ConceptForm = () => {
  const conceptContext = useContext(ConceptContext);

  const { addConcept, current, clearCurrent, updateConcept } = conceptContext;

  useEffect(() => {
    if (current != null) {
      setConcept(current);
    } else {
      setConcept({
        title: '',
        description: '',
        patent: 'no patent',
      });
    }
  }, [conceptContext, current]);

  const [concept, setConcept] = useState({
    title: '',
    description: '',
    patent: 'no patent',
  });

  const { title, description, patent } = concept;

  const onChange = (e) =>
    setConcept({ ...concept, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addConcept(concept);
    } else {
      updateConcept(concept);
    }

    // setConcept({
    //   title: '',
    //   description: '',
    //   patent: 'no patent',
    // });
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Update Contact' : 'Add Concept'}
      </h2>
      <input
        type='text'
        placeholder='title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <textarea
        name='description'
        cols='30'
        rows='10'
        onChange={onChange}
        placeholder='description'
        value={description}
      ></textarea>
      <h4>Patent</h4>
      <input
        type='radio'
        name='patent'
        value='no patent'
        checked={patent === 'no patent'}
        onChange={onChange}
      />{' '}
      No Patent{' '}
      <input
        type='radio'
        name='patent'
        value='has patent'
        checked={patent === 'has patent'}
        onChange={onChange}
      />{' '}
      Has Patent{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add New Concept'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ConceptForm;
