import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ConceptContext from '../../context/concept/conceptContext';

function ConceptItem({ concept }) {
  const conceptContext = useContext(ConceptContext);

  const { deleteConcept, setCurrent, clearCurrent } = conceptContext;

  const { _id, title, description, patent } = concept;

  const onDelete = () => {
    deleteConcept(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {title}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (patent === 'has patent' ? 'badge-success' : 'badge-primary')
          }
        >
          {patent.charAt(0).toUpperCase() + patent.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {title && (
          <li>
            <i className='far fa-lightbulb'></i> {title}
          </li>
        )}
        {description && (
          <li>
            <i className='far fa-keyboard'></i> {description}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(concept)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
}

ConceptItem.propTypes = {
  concept: PropTypes.object.isRequired,
};

export default ConceptItem;
