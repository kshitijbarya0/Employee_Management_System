import React, { useState } from 'react'
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
function login({ setUser, setIsLogin }) {
    const loginLogic = ({ email, password }) => {
        const userData = JSON.parse(localStorage.getItem('employeeData'));
        if (userData) {
            const userEntry = Object.entries(userData).find(([key, emp]) => {
                return emp.email === email && emp.password === password;
            });

            if (userEntry) {
                const [empKey, empData] = userEntry;
                localStorage.setItem('loggedInUser', empKey);
                localStorage.setItem('user', 'Emp')
                setUser('Emp')
                setIsLogin(true)
                toast("Successfully loggedIn!")
                return [empKey, empData];
            } else {
                toast("User not found!")
            }
        } else {
            toast("Something went wrong. Please try again later.")
        }
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const HandleFromSubit = (e) => {
        e.preventDefault();
        if (email === 'admin@gmail.com' && password === "admin123") {
            setUser('admin')
            localStorage.setItem('user', 'admin')
            setIsLogin(true)
            toast("Successfully loggedIn!")
        } else {
            loginLogic({ email, password })
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div className='Login-from'>
            <div className="login-desgin">
                <form className="login-from" onSubmit={(e) => { HandleFromSubit(e) }}>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email..'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                    />
                    <label htmlFor=''>Password</label>
                    <input
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                    />
                    <div className='login-btn'>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login