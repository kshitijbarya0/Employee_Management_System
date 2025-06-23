import React from 'react'
import './stylecss.css'
import active from '../Employee/png/active.png'
import bell from '../Employee/png/bell.png'
import { Logout } from '../Auth/logout'
import { ToastContainer, toast } from 'react-toastify';
function Navbar({ name, belLength }) {
    const handleLogout = () => {
        window.location.reload();
        const tryLogout = Logout();
        if (tryLogout) {
            toast("logout");
        } else {
            toast("something went worng!")
        }
    }
    return (
        <div className='nav-bar'>
            <div className='logo'><p>Hey</p><span><h3>{name}</h3>😄</span></div>
            <div className='name-logout'>
                {
                    belLength ? (<span className='belcount'><img src={active} alt="Active Icon" height={30} /><span className='count'><h6>{belLength}</h6></span></span>) : <img src={bell} alt="Notification Bell" height={30} />
                }
                <button onClick={() => { handleLogout() }}>Logout</button>
            </div>
        </div>
    )
}
export default Navbar