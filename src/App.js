import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
//import localData from "./d2.json";
import localData from "./db.json";

import ManyTasks from "./components/ManyTasks";

// import  'jquery/dist/jquery.min.js';

import Nav from "./components/Nav";

function App() {
  //GLOBAL
  const [tasks, setTasks] = useState([]);
  console.log(localData);
  // LOAD données dans setTasks
  useEffect(() => {
    const getTasks = async () => {
      //const tasksFromServer = await fetchTasks();
      const tasksFromServer = await fetchLocal();
      console.log(tasksFromServer);
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchLocal = async () => {
    return localData["produits"];
  };

  //FETCH TASKS ALL
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  ////////////////////// DELETE //////////////////////

  //DELETE
  const deleteTask = async (id) => {};

  //UPDATE
  const toggleReminder = async (id) => {};

  return (
    <div>
      <Nav />
      {/* Le reste du contenu de votre application */}
      <ManyTasks
        items={tasks}
        onDeleteMany={deleteTask}
        onToggleMany={toggleReminder}
      />
    </div>
  );
}

export default App;
