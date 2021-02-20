import React from 'react';
import PropTypes from 'prop-types';

function ConceptItem({ concept }) {
  const { id, title, description, patent } = concept;
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
            <i class='far fa-lightbulb'></i> {title}
          </li>
        )}
        {description && (
          <li>
            <i class='far fa-keyboard'></i> {description}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
}

ConceptItem.propTypes = {
  concept: PropTypes.object.isRequired,
};

export default ConceptItem;