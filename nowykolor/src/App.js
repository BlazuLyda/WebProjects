import { useState } from 'react';
import './App.css';

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <div id="container">
        <div id="inputBox">
            <input type="text" id="taskInput" />
            <button id="inputButton" onclick="taskManager.createNewTask()">
                <span>+</span>
            </button>
            <div id="inputBoxText">
                <h3>Task name</h3>
            </div>
        </div>
        <ul></ul>
      </div>
    </div>
  );
}

export default App;
