import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import localData from "./d2.json";
import localData from "./db.json";
import ManyTasks from "./components/ManyTasks";
import Presentation from "./components/Presentation";
import ProductModale from "./components/ProductModale";
//import CenteredComponent from "./components/CenteredComponent";

import Nav from "./components/Nav";

function App() {
  //GLOBAL
  const [tasks, setTasks] = useState([]);
  // console.log(localData);

  const [showModal, setShowModal] = useState(false);

  const [currentItem, setCurrentItem] = useState(false);

  //////////////   ADD   ////////////////////////////////////
  // Toggle true/false pour affichage de la modale d'ajout de produit
  const [showAddForm, setShowAddForm] = useState(false);

  // LOAD données dans setTasks
  useEffect(() => {
    const getTasks = async () => {
      //const tasksFromServer = await fetchTasks();
      const tasksFromServer = await fetchItemsLocalJson();
      //console.log(tasksFromServer);
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //FETCH TASKS LOCAL

  const fetchItemsLocal = async () => {
    return localData["produits"];
  };

  const fetchItemsLocalJson = async () => {
    return localData["produits"];
  };

  //FETCH TASKS ALL
  const fetchItemsRemote = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  ////////////////////// DELETE //////////////////////

  //DELETE
  const deleteItem = async (id) => {
    //console.log(id)
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteItemLocal = async (id) => {
    console.log("delete", id);
    //setShowAddForm(!showAddForm); // Invert the value of showAddForm
  //   await fetch(`http://localhost:5000/tasks/${id}`,{
  //     method: 'DELETE',
  // })
  setTasks(tasks.filter((task) => task.id !== id))


    // setShowModal(true);
  };

  const editItem = async (item) => {
    //console.log(item);
    setCurrentItem(item);
    setShowModal(true);
  };

  //UPDATE
  const toggleReminder = async (id) => {};

  const openProductModal = () => {
    setShowModal(true);
  };

  const closeProductModal = () => {
    setShowModal(false);
  };

  return (
    <BrowserRouter>
      <div>
        <Nav />

        <ProductModale
          showModal={showModal}
          onOpenModal={openProductModal}
          onCloseModal={closeProductModal}
          product={currentItem}
        />
        <Routes>
          <Route
            path="/Produits"
            element={
              tasks.length > 0 ? (
                <ManyTasks
                  items={tasks}
                  onDeleteMany={deleteItemLocal}
                  onEditMany={editItem}
                  onToggleMany={toggleReminder}
                />
              ) : (
                "Aucun produit à afficher"
              )
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
        {/* MODALE AJOUT PRODUIT */}
      </div>
    </BrowserRouter>
  );
}

export default App;
