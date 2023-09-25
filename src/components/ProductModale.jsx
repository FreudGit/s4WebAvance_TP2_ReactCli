import React, { useState, useEffect } from "react";

//mode = "READONLY", 'EDIT', 'ADD'
function ProductModale({
  showModal,
  onCloseModal,
  onUpdate,
  product,
  mode = "VIEW",
  onAdd,
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
        id: product.id || "",
        nom: product.nom || "",
        description: product.description || "",
        prix: product.prix || 0,
        categorie: product.categorie || "",
      });
    } else {
      // Réinitialisation de l'état du formulaire lorsque le modal est ouvert
      setFormData({
        nom: "",
        description: "",
        prix: 0,
        categorie: "",
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
    console.log("handleSubmit");
    e.preventDefault();
    if (mode === "ADD") {
      onAdd(formData);
    } else {
      onUpdate(formData);
    }
    onCloseModal();
  };

  return (
    <div>
      {showModal && (
        <div
          className="modal"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {mode === "EDIT"
                    ? "Modifier un Produit"
                    : mode === "ADD"
                    ? "Ajouter un Produit"
                    : "Voir un Produit"}
                </h5>
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
                      readOnly={mode === "VIEW"} // Lecture seule uniquement en mode READONLY
                      required
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
                      readOnly={mode === "VIEW"} // Lecture seule uniquement en mode READONLY
                      required
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
                      readOnly={mode === "READONLY"} // Lecture seule uniquement en mode READONLY
                      required
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
                      readOnly={mode === "VIEW"} // Lecture seule uniquement en mode READONLY
                      required
                    />
                  </div>
                  <div className="modal-footer">
                    {mode !== "VIEW" && (
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value={mode === "EDIT" ? "Modifier" : "Ajouter"} // Le texte du bouton dépend du mode
                      />
                    )}
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={onCloseModal}
                    >
                      Fermer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductModale;
