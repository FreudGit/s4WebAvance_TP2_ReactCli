import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import localData from "./db.json";
import ManyTasks from "./components/ManyTasks";
import Presentation from "./components/Presentation";
import ProductModale from "./components/ProductModale";
import Nav from "./components/Nav";

function App() {
  //GLOBAL
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal_ReadOnly, setShowModal_ReadOnly] = useState(false);
  const [showModal_Mode, setShowModal_Mode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  //**
  // TP_REMOTEVERSION
  //  * LOCALVAR: use local variable
  // * LOCALVAR_ASJSON: use local json
  // * REMOTEJSON: use remote json
  //** */
  const TP_REMOTEVERSION = {
    LOCALVAR: "localvar",
    LOCALVAR_ASJSON: "localvar_AsJSON",
    REMOTEJSON: "remoteJSON",
  };

  //const SELECTEDTP_VERSION=TP_REMOTEVERSION.LOCALVAR;
  const SELECTEDTP_VERSION = TP_REMOTEVERSION.REMOTEJSON;

  ////////////////////////////////////////////////////////
  /////////////   LOAD DATAS

  // LOAD données dans setTasks
  useEffect(() => {
    const getTasks = async () => {
      //const tasksFromServer = await fetchTasks();
      if (SELECTEDTP_VERSION == TP_REMOTEVERSION.REMOTEJSON) {
        const tasksFromServer = await fetchItemsRemote();
        setTasks(tasksFromServer);
      } else if (SELECTEDTP_VERSION == TP_REMOTEVERSION.LOCALVAR_ASJSON) {
        const tasksFromServer = await fetchItemsLocalJson();
        setTasks(tasksFromServer);
      } else {
        const tasksFromServer = await fetchItemsLocal();
        setTasks(tasksFromServer);
      }
    };
    getTasks();
  }, []);

  //////////////////////////////////////////////////////////
  // FETCH

  //FETCH TASKS LOCAL (VAR)
  const fetchItemsLocal = async () => {
    return [
      {
        id: 1,
        nom: "Microsoft Visual Studio",
        description:
          "Un environnement de développement intégré (IDE) puissant pour les développeurs .NET.",
        prix: 199.99,
        categorie: "IDE",
      },
      {
        id: 2,
        nom: "Adobe Photoshop",
        description:
          "Un logiciel de retouche d'images professionnel utilisé par les designers du monde entier.",
        prix: 249.99,
        categorie: "Logiciel de retouche",
      },
      {
        id: 3,
        nom: "Python",
        description:
          "Un langage de programmation interprété, polyvalent et largement utilisé dans le développement web et scientifique.",
        prix: 0,
        categorie: "Langage de programmation",
      },
      {
        id: 4,
        nom: "Microsoft Excel",
        description:
          "Une application de feuilles de calcul puissante utilisée pour l'analyse de données et la gestion de projet.",
        prix: 129.99,
        categorie: "Logiciel de gestion de données",
      },
      {
        id: 5,
        nom: "React",
        description:
          "Une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur interactives.",
        prix: 0,
        categorie: "Framework de programmation",
      },
      {
        id: 6,
        nom: "AutoCAD",
        description:
          "Un logiciel de conception assistée par ordinateur (CAO) utilisé dans l'architecture et l'ingénierie.",
        prix: 699.99,
        categorie: "Logiciel de CAO",
      },
      {
        id: 7,
        nom: "Java",
        description:
          "Un langage de programmation polyvalent et populaire utilisé dans le développement d'applications web et mobiles.",
        prix: 0,
        categorie: "Langage de programmation",
      },
      {
        id: 8,
        nom: "Sublime Text",
        description:
          "Un éditeur de texte léger et personnalisable apprécié des développeurs.",
        prix: 70.0,
        categorie: "IDE",
      },
      {
        id: 9,
        nom: "Angular",
        description:
          "Un framework JavaScript pour la création d'applications web dynamiques.",
        prix: 0,
        categorie: "Framework de programmation",
      },
      {
        id: 10,
        nom: "Adobe Illustrator",
        description:
          "Un logiciel de création de graphiques vectoriels utilisé par les illustrateurs et les designers.",
        prix: 239.99,
        categorie: "Logiciel de design",
      },
    ];
  };

  //FETCH TASKS LOCAL (JSON)
  const fetchItemsLocalJson = async () => {
    return localData["produits"];
  };

  //FETCH TASKS REMOTE (JSON )
  const fetchItemsRemote = async () => {
    const res = await fetch("http://localhost:5000/produits");
    const data = await res.json();
    return data;
  };

  ////////////////////////////////////////////////////////
  /////////////   ADD DATAS

  const addItemRemote = async (task) => {
    const res = await fetch("http://localhost:5000/produits", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setCurrentItem(null);
  };

  const addItemLocal = async (task) => {
    console.log("func addItemLocal", task);
    const id = Math.floor(Math.random() * 1000);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setCurrentItem(null);
  };

  ////////////////////////////////////////////////////////
  /////////////   UPDATE DATAS

  const updateItemLocal = (item) => {
    setTasks(tasks.map((itemMap) => (itemMap.id === item.id ? item : itemMap)));
    setCurrentItem(null);
  };

  const updateItemREMOTE = async (item) => {
    const res = await fetch(`http://localhost:5000/produits/${item.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await res.json();
    setTasks(tasks.map((itemMap) => (itemMap.id === item.id ? item : itemMap)));
  };

  ////////////////////////////////////////////////////////
  /////////////   DELETE DATAS

  const deleteItemRemote = async (id) => {
    await fetch(`http://localhost:5000/produits/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteItemLocal = async (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  ////////////////////////////////////////////////////////
  /////////////   UI

  const showModale_editItem = async (item, mode) => {
    console.log("func editItem", "mode", mode);
    setCurrentItem(item);
    setShowModal(true);
    setShowModal_ReadOnly(mode === "VIEW");
    setShowModal_Mode(mode);
  };

  const showModale_addItem = async (item, readOnly) => {
    console.log("func showModale_addItem");
    setCurrentItem(false);
    console.log(currentItem);
    console.log(readOnly);
    console.log("func addItem", "readonly:", readOnly);
    setShowModal_Mode("ADD");
    setShowModal(true);
  };

  const openProductModal = () => {
    setShowModal(true);
  };

  const closeProductModal = () => {
    setCurrentItem(null);
    setShowModal(false);
  };

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <ProductModale
          showModal={showModal}
          readOnly={showModal_ReadOnly}
          onOpenModal={openProductModal}
          onCloseModal={closeProductModal}
          onAdd={
            SELECTEDTP_VERSION === TP_REMOTEVERSION.REMOTEJSON
              ? addItemRemote
              : addItemLocal
          }
          onUpdate={
            SELECTEDTP_VERSION === TP_REMOTEVERSION.REMOTEJSON
              ? updateItemREMOTE
              : updateItemLocal
          }
          product={currentItem}
          mode={showModal_Mode}
        />
        <Routes>

          <Route
            path="/Produits"
            element={
              SELECTEDTP_VERSION === TP_REMOTEVERSION.LOCALVAR ||
              SELECTEDTP_VERSION === TP_REMOTEVERSION.LOCALVAR_ASJSON ? (
                tasks.length > 0 ? (
                  <ManyTasks
                    items={tasks}
                    onDeleteMany={deleteItemLocal}
                    onViewMany={showModale_editItem}
                    onAdd={showModale_addItem}
                  />
                ) : (
                  "Aucun produit à afficher"
                )
              ) : SELECTEDTP_VERSION === TP_REMOTEVERSION.REMOTEJSON ? (
                tasks.length > 0 ? (
                  <ManyTasks
                    items={tasks}
                    onDeleteMany={deleteItemRemote}
                    onViewMany={showModale_editItem}
                    onAdd={showModale_addItem}
                  />
                ) : (
                  "Aucun produit à afficher"
                )
              ) : null
            }
          />

          <Route
            path="/"
            element={
              <>
                <Presentation />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
