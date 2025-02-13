// import { Navigate } from 'react-router-dom'
// import './login.css'
// import { useNavigate } from 'react-router-dom'
// const Login = () => {

//     const Navigate = useNavigate();
//     return(
//         <>
//         <div id='login-body'>

//             <div className="login">
//             <div className="center-body">

//             <h2 id='login-heading'>Login </h2>
//             <label id='labels'>Name:</label>
//             <input type="text" placeholder='Enter your Name' id='credentials'/>
//             <label id='labels'>Password:</label>
//             <input type="password" placeholder='Enter your Password' id='credentials'/>
            

//             <div className="login-btn-div">
//             <button id='login-btn' onClick={() =>Navigate('/todolist') }>Login</button></div>
//             </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Login;

// import './login.css';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Login = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));

//         if (!storedUser) {
//             alert('No user found! Please register.');
//             return;
//         }

//         if (name !== storedUser.name || password !== storedUser.password) {
//             alert('Invalid Credentials!');
//             return;
//         }

//         alert('Login Successful!');
//         navigate('/todolist');
//     };

//     return (
//         <div id='login-body'>
//             <div className="login">
//                 <div className="center-body">
//                     <h2 id='login-heading'>Login</h2>
//                     <label id='labels'>Name:</label>
//                     <input type="text" placeholder='Enter your Name' id='credentials' value={name} onChange={(e) => setName(e.target.value)} />
//                     <label id='labels'>Password:</label>
//                     <input type="password" placeholder='Enter your Password' id='credentials' value={password} onChange={(e) => setPassword(e.target.value)} />
//                     <div className="login-btn-div">
//                         <button id='login-btn' onClick={handleLogin}>Login</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Retrieve the list of users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.length === 0) {
            alert('No users found! Please register.');
            return;
        }

        // Check if a user with the provided name and password exists
        const user = users.find((user) => user.name === name && user.password === password);

        if (!user) {
            alert('Invalid Credentials!');
            return;
        }

        alert(`Welcome back, ${user.name}!`);
        navigate('/todolist');
    };

    return (
        <div id='login-body'>
            <div className="login">
                <div className="center-body">
                    <h2 id='login-heading'>Login</h2>
                    <label id='labels'>Name:</label>
                    <input type="text" placeholder='Enter your Name' id='credentials' value={name} onChange={(e) => setName(e.target.value)} />
                    <label id='labels'>Password:</label>
                    <input type="password" placeholder='Enter your Password' id='credentials' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="login-btn-div">
                        <button id='login-btn' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

