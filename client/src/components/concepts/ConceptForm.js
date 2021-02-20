import React, { useState, useContext } from 'react';
import ConceptContext from '../../context/concept/conceptContext';

export const ConceptForm = () => {
  const conceptContext = useContext(ConceptContext);

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

    conceptContext.addConcept(concept);

    setConcept({
      title: '',
      description: '',
      patent: 'no patent',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Concept</h2>
      <input
        type='text'
        placeholder='title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        onChange={onChange}
        placeholder='description'
      >
        {description}
      </textarea>
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
          value='Add New Concept'
          className='btn btn-primary btn-blocl'
        />
      </div>
    </form>
  );
};

export default ConceptForm;
