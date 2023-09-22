import React from "react";

function CenteredComponent({ showModal, onOpenModal, onCloseModal }) {
  return (
    <div>
      {/* Votre contenu existant */}
      <div className="container">
        <h1>Contenu existant</h1>
        <p>Autres éléments de contenu.</p>
      </div>

      {/* Bouton pour ouvrir le composant au centre */}
      <button onClick={onOpenModal} className="btn btn-primary">
        Ouvrir le composant au centre
      </button>

      {/* Composant au centre */}
      {showModal && (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Mon Composant au Centre</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Contenu de votre composant.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={onCloseModal}
                >
                  Fermer
                </button>
                <button type="button" className="btn btn-primary">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CenteredComponent;
