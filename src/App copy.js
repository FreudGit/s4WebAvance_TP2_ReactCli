import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import localData from "./db.json";
import ManyTasks from "./components/ManyTasks";
import Presentation from "./components/Presentation";
import ProductModale from "./components/ProductModale";
import Nav from "./components/Nav";
import { useLocation } from "react-router-dom";
import TestComponent from "./components/TestComponent";

function App() {
  //GLOBAL
  const [tasks, setTasks] = useState([]);
  const [tasksLocal, setTasksLocal] = useState([]);
  const [tasksRemote, setTasksRemote] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showModal_ReadOnly, setShowModal_ReadOnly] = useState(false);
  const [showModal_Mode, setShowModal_Mode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const location = useLocation();

  ////////////////////////////////////////////////////////
  /////////////   LOAD DATAS

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

  //console.log(location.pathname); // result: '/secondpage'
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

  ////////////////////////////////////////////////////////
  /////////////   ADD DATAS

  const addItemRemote = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
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
  /////////////   EDIT DATAS

  const updateItemLocal = (item) => {
    console.log("func updateItemLocal", item);
    setTasks(tasks.map((itemMap) => (itemMap.id === item.id ? item : itemMap)));

    console.log(tasks);
    setCurrentItem(null);
  };

  const updateItemREMOTE = async (item) => {
    // console.log(id)
    const taskToToggle = await fetchItemsRemote(item.id);
    //const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${item.id}`, {
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
    await fetch(`http://localhost:5000/tasks/${id}`, {
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
        <TestComponent />

        <ProductModale
          showModal={showModal}
          readOnly={showModal_ReadOnly}
          onOpenModal={openProductModal}
          onCloseModal={closeProductModal}
          onAdd={addItemLocal}
          onUpdate={updateItemLocal}
          product={currentItem}
          mode={showModal_Mode}
        />
        <Routes>
          <Route
            path="/Produits"
            element={
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
            }
          />

          <Route
            path="/produitsJsonRemote"
            element={
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
            }
          />

          <Route
            path=""
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
