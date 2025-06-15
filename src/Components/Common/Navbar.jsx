import React from 'react'
import './stylecss.css'
import active from '../Employee/png/active.png'
import bell from '../Employee/png/bell.png'
function Navbar({ name, belLength }) {
    return (
        <div className='nav-bar'>
            <div className='logo'><p>Hey</p><span><h3>{name}</h3>😄</span></div>
            <div className='name-logout'>
                {
                    belLength ? (<span className='belcount'><img src={active} alt="Active Icon" height={30} /><span className='count'><h6>{belLength}</h6></span></span>) : <img src={bell} alt="Notification Bell" height={30} />
                }
                <button>Logout</button>
            </div>
        </div>
    )
}
export default Navbar