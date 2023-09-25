import React from "react";
import { useLocation } from "react-router-dom";

function MyComponent() {
  // Utilisez useLocation pour accéder à la valeur du chemin
  const location = useLocation();

  return (
    <div>
      <h1>Chemin actuel :</h1>
      <p>{location.pathname}</p>
    </div>
  );
}

export default MyComponent;
