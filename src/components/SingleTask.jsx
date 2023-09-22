import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SingleTask = ({ item, onDelete, onToggle }) => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card position-relative">
        <div className="card-body">
          <h5 className="card-title fs-8">{item.nom}</h5>
          <p className="card-text text-muted small">{item.description}</p>
          <p className="card-text small">Prix: {item.prix} €</p>
        </div>
        <FaTimes
          style={{
            color: 'red',
            cursor: 'pointer',
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
          }}
          onClick={() => onDelete(item.id)}
        />
      </div>
    </div>
  );
};

export default SingleTask;
