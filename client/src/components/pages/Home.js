import React from 'react';
import Concepts from '../concepts/Concepts';
import ConceptForm from '../concepts/ConceptForm';
function Home() {
  return (
    <div className='grid-2'>
      <div>
        <ConceptForm />
      </div>
      <div>
        <Concepts />
      </div>
    </div>
  );
}

export default Home;
