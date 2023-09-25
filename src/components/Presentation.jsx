import React from "react";

const PresentationPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Bienvenue sur Notre Site E-commerce</h1>
      <p className="lead text-center">
        Félicitations, vous avez choisi le meilleur endroit pour vos achats en
        ligne !
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>À propos de nous</h2>
          <p>
            Nous sommes une entreprise dédiée à fournir les meilleurs produits
            et services à nos clients. Avec des années d'expérience dans
            l'industrie, nous nous engageons à offrir une expérience de
            magasinage en ligne exceptionnelle.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Nos Produits</h2>
          <p>
            Découvrez notre vaste gamme de produits de haute qualité, allant des
            dernières technologies aux produits de style de vie. Que vous
            recherchiez des gadgets électroniques, des vêtements à la mode ou
            d'autres articles passionnants, vous les trouverez tous ici.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h2>Contactez-nous</h2>
        <p>
          Si vous avez des questions, des commentaires ou avez besoin
          d'assistance, n'hésitez pas à nous contacter. Notre équipe de support
          client est là pour vous aider.
        </p>
        <p>
          Email : <a href="mailto:">francois@hebert.com</a>
        </p>
      </div>
    </div>
  );
};

export default PresentationPage;
