import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import localData from "./d2.json";
import localData from "./db.json";

import ManyTasks from "./components/ManyTasks";
import Presentation from "./components/Presentation";

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
    <BrowserRouter>

    <div>
      <Nav />
      {/* Le reste du contenu de votre application */}



      <Routes>
                    <Route path='/Products' element={tasks.length > 0 ? (
                        <ManyTasks
                        items={tasks}
                        onDeleteMany={deleteTask}
                        onToggleMany={toggleReminder}
                      />
                    ) : (
                        'No Tasks To Show'
                    )} />

                    <Route path='/' element={<Presentation />} />
                </Routes>



      <ManyTasks
        items={tasks}
        onDeleteMany={deleteTask}
        onToggleMany={toggleReminder}
      />
    </div>
    </BrowserRouter>

  );
}

export default App;
