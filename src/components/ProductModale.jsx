import React, { useState, useEffect } from "react";

function ProductModale({
  showModal,
  onCloseModal,
  onSubmit,
  product,
  readOnly = true,
}) {
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    prix: 0,
    categorie: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        nom: product.nom || "",
        description: product.description || "",
        prix: product.prix || 0,
        categorie: product.categorie || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez gérer l'envoi du formulaire ici, par exemple, en appelant une fonction pour mettre à jour le produit.
    console.log("Formulaire soumis avec les données :", formData);
  };

  return (
    <div>
      {/* Composant au centre */}
      {showModal && (
        <div
          className="modal"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modifier un Produit</h5>
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
                <form className="add-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      readOnly={readOnly}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      readOnly={readOnly}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="prix" className="form-label">
                      Prix
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="prix"
                      name="prix"
                      value={formData.prix}
                      onChange={handleChange}
                      readOnly={readOnly}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categorie" className="form-label">
                      Catégorie
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categorie"
                      name="categorie"
                      value={formData.categorie}
                      onChange={handleChange}
                      readOnly={readOnly}
                    />
                  </div>
                  {/* <input
                    type="submit"
                    className="btn btn-primary"
                    value="Modifier"
                  /> */}
                </form>
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
                {!readOnly && (
                  <button type="button" className="btn btn-primary">
                    Enregistrer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductModale;
