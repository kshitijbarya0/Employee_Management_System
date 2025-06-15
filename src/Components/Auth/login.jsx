import React, { useState } from 'react'
import './login.css'
function login({ setUser, setIsLogin, setAdminData, setEmpData }) {
    const loginLogic = ({ email, password }) => {
        const userData = JSON.parse(localStorage.getItem('employeeData'));
        if (userData) {
            const userEntry = Object.entries(userData).find(([key, emp]) => {
                return emp.email === email && emp.password === password;
            });

            if (userEntry) {
                const [empKey, empData] = userEntry;
                localStorage.setItem('loggedInUser', empKey);
                return [empKey, empData];
            } else {
                alert("User not found")
            }
        } else {
            alert("Something went wrong. Please try again later.")
        }
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const HandleFromSubit = (e) => {
        e.preventDefault();
        if (email === 'admin@gmail.com') {
            const Trylogin = loginLogic({ email, password })
            setUser('admin')
            setIsLogin(prev => !prev)
            setAdminData(Trylogin)
        } else {
            const Trylogin = loginLogic({ email, password })
            setUser('Emp')
            setIsLogin(prev => !prev)
            setEmpData(Trylogin)
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