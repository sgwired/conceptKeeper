import React from 'react';
import Concepts from '../concepts/Concepts';
import ConceptForm from '../concepts/ConceptForm';
import ConceptFilter from '../concepts/ConceptFilter';

function Home() {
  return (
    <div className='grid-2'>
      <div>
        <ConceptForm />
      </div>
      <div>
        <ConceptFilter />
        <Concepts />
      </div>
    </div>
  );
}

export default Home;
