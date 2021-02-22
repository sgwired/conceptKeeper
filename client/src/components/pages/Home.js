import React, { useContext, useEffect } from 'react';
import Concepts from '../concepts/Concepts';
import ConceptForm from '../concepts/ConceptForm';
import ConceptFilter from '../concepts/ConceptFilter';
import AuthContext from '../../context/auth/authContext';

function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
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
