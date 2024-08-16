import React, { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };
  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add Task</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              textDecoration: task.completed ? 'line-through' : 'none',
              backgroundColor: task.completed ? '#d4edda' : '#fff',
            }}
            onClick={() => toggleComplete(index)}
          >
            {task.text}
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const styles = {
  container: {
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    textShadow: '2px 2px #dcdcdc',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flexGrow: 1,
    marginRight: '10px',
    transition: 'border-color 0.3s',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ff4d4d',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'transform 0.2s',
  },
};
export default App;