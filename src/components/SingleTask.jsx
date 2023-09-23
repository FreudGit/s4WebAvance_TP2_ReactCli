import React from "react";
import { FaTimes, FaAngleDoubleRight } from "react-icons/fa";
import { CiEdit } from "react-icons/ci"; // Import de l'icône d'édition

const SingleTask = ({ item, onDelete, onView }) => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card position-relative">
        <div className="card-body">
          <h5 className="card-title fs-8">{item.nom}</h5>
          <p className="card-text text-muted small">{item.description}</p>
          <p className="card-text small">Prix: {item.prix} $</p>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button
            className="btn btn-primary btn-sm me-1"
            onClick={() => onView(item, 'EDIT')}
          >
            <CiEdit /> Éditer
          </button>
          <button
            className="btn btn-primary btn-sm me-1"
            onClick={() => onView(item, 'VIEW')}
          >
            <FaAngleDoubleRight /> Détails
          </button>
          <FaTimes
            style={{
              color: "red",
              cursor: "pointer",
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
            }}
            onClick={() => onDelete(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
