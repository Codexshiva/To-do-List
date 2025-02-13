// import './registeration.css'
// import { Link, useNavigate } from 'react-router-dom';

// const Registeration = () => {

// const Navigate = useNavigate();
//     return(
//         <>

//         <div id='registeration'>

//         <div className="register">
//         <div className="center">
//         <h2 id='heading'>Register here</h2>
//         <label id='labels'>Name:</label>
//         <input type="text" placeholder='Enter your Name' id='details'/>
//         <label id='labels'>Email:</label>
//         <input type="email" placeholder='Enter your Email' id='details'/>
//         <label id='labels'>Password:</label>
//         <input type="password" placeholder='Enter your Password' id='details'/>
//         <label id='labels'>Confirm Password:</label>
//         <input type="password" placeholder='Confirm Password' id='details'/>


//         <button id='register-btn' onClick={() =>Navigate('/login') }>Register here!!</button>
//         </div>
//         </div>
//         </div>

//         </>
//     )
// }

// export default Registeration;


// import './registeration.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Registeration = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleRegister = () => {
//         const nameRegex = /^[a-zA-Z\s]{3,}$/;
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

//         if (!nameRegex.test(name)) {
//             alert('Invalid Name. Must be at least 3 letters.');
//             return;
//         }
//         if (!emailRegex.test(email)) {
//             alert('Invalid Email format.');
//             return;
//         }
//         if (!passwordRegex.test(password)) {
//             alert('Password must be at least 6 characters long and contain letters and numbers.');
//             return;
//         }
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         localStorage.setItem('user', JSON.stringify({ name, email, password }));
//         alert('Registration Successful!');
//         navigate('/login');
//     };

//     return (
//         <div id='registeration'>
//             <div className="register">
//                 <div className="center">
//                     <h2 id='heading'>Register here</h2>
//                     <label id='labels'>Name:</label>
//                     <input type="text" placeholder='Enter your Name' id='details' value={name} onChange={(e) => setName(e.target.value)} />
//                     <label id='labels'>Email:</label>
//                     <input type="email" placeholder='Enter your Email' id='details' value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <label id='labels'>Password:</label>
//                     <input type="password" placeholder='Enter your Password' id='details' value={password} onChange={(e) => setPassword(e.target.value)} />
//                     <label id='labels'>Confirm Password:</label>
//                     <input type="password" placeholder='Confirm Password' id='details' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                     <button id='register-btn' onClick={handleRegister}>Register here!!</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Registeration;


import './registeration.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Registeration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        const nameRegex = /^[a-zA-Z\s]{3,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!nameRegex.test(name)) {
            alert('Invalid Name. Must be at least 3 letters.');
            return;
        }
        if (!emailRegex.test(email)) {
            alert('Invalid Email format.');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 6 characters long and contain letters and numbers.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Retrieve existing users from localStorage or initialize as an empty array
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email is already registered
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already registered. Please use a different email.');
            return;
        }

        // Add new user to the users array
        const newUser = { name, email, password };
        users.push(newUser);

        // Update localStorage with the new users array
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration Successful!');
        navigate('/login');
    };

    return (
        <div id='registeration'>
            <div className="register">
                <div className="center">
                    <h2 id='heading'>Register here</h2>
                    <label id='labels'>Name:</label>
                    <input type="text" placeholder='Enter your Name' id='details' value={name} onChange={(e) => setName(e.target.value)} />
                    <label id='labels'>Email:</label>
                    <input type="email" placeholder='Enter your Email' id='details' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label id='labels'>Password:</label>
                    <input type="password" placeholder='Enter your Password' id='details' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label id='labels'>Confirm Password:</label>
                    <input type="password" placeholder='Confirm Password' id='details' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button id='register-btn' onClick={handleRegister}>Register here!!</button>
                </div>
            </div>
        </div>
    );
};

export default Registeration;
