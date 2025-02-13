// import './todolist.css';
// import { useState } from 'react';

// const Todolist = () => {
//     const [tasks, setTasks] = useState([]);
//     const [task, setTask] = useState('');

//     const addTask = () => {
//         if (task.trim() === '') return;
//         setTasks([...tasks, task]);
//         setTask('');
//     };

//     const deleteTask = (index) => {
//         setTasks(tasks.filter((_, i) => i !== index));
//     };

//     return (
//         <>
//         <div id='to-do-list'>
//             <div className="selection-div">
//             <label id='task-label'>Add your Daily tasks here:</label>
//             <input id='task-details' type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
//             <button id='task-add-btn' onClick={addTask}>Add Task</button>
//             <div className="task-added-list">
//             <ul id='task-list'>
//                 {tasks.map((t, index) => (
//                     <li key={index} className='task-item'>
//                         <p id='task-added'>{t}</p> <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default Todolist;


import './todolist.css';
import { useState, useEffect } from 'react';

const Todolist = () => {
    const [tasks, setTasks] = useState(() => {
        // Retrieve tasks from localStorage when the component loads
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [task, setTask] = useState('');

    // Update localStorage whenever the `tasks` state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, task]);
        setTask('');
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <>
        <div id='to-do-list'>
            <div className="selection-div">
            <label id='task-label'>Add your Daily tasks here:</label>
            <input id='task-details' type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
            <button id='task-add-btn' onClick={addTask}>Add Task</button>
            <div className="task-added-list">
            <ul id='task-list'>
                {tasks.map((t, index) => (
                    <li key={index} className='task-item'>
                        <p id='task-added'>{t}</p> <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
            </div>
        </div>
        </>
    );
};

export default Todolist;
