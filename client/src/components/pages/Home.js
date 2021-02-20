import React from 'react';
import Concepts from '../concepts/Concepts';

function Home() {
  return (
    <div className='grid-2'>
      <div>{/* Concepts Form */}</div>
      <div>
        <Concepts />
      </div>
    </div>
  );
}

export default Home;
