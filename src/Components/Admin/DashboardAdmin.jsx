import React, { useEffect, useState } from 'react'
import Navbar from '../Common/Navbar'
import './admin.css'
function DashboardAdmin({ adminData }) {
    const [title, setTitle] = useState("")
    const [role, setRole] = useState("")
    const [empName, setEmpName] = useState("")
    const [textarea, setTextarea] = useState("")
    const [date, setDate] = useState('')
    const [empData, setEmpData] = useState(null)

    const HandleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Title: title,
            WorkType: role,
            Description: textarea,
            date,
            MarkComplete: false
        }
        let allEmployeeData = JSON.parse(localStorage.getItem('employeeData'))
        const currUser = allEmployeeData[empName]
        currUser.AllTaskList.push(data)
        allEmployeeData[empName] = currUser;
        localStorage.setItem('employeeData', JSON.stringify(allEmployeeData))
        setEmpData(allEmployeeData)
        setTitle('')
        setRole('')
        setEmpName('')
        setTextarea('')
        setDate('')
    }
    useEffect(() => {
        const allEmployeeData = JSON.parse(localStorage.getItem('employeeData'));
        setEmpData(allEmployeeData)
    }, [])
    return (
        <div className='admin-dashboard'>
            <Navbar name={"Admin"} />
            <form className="form" onSubmit={(e) => { HandleSubmit(e) }}>
                <div className="admin-layout">
                    <div className="form1">
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            placeholder='Enter the Title..'
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            required
                        />
                        <label htmlFor="">Role type</label>
                        <input
                            type="text"
                            placeholder='Enter dev,marketing, etc..'
                            value={role}
                            onChange={(e) => { setRole(e.target.value) }}
                            required
                        />
                        <label htmlFor="">Assgin to</label>
                        <input
                            type="text"
                            placeholder='Enter name of empolyee'
                            value={empName}
                            onChange={(e) => { setEmpName(e.target.value) }}
                        />
                        <label htmlFor="">Select Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }}
                        />
                    </div>
                    <div className="form2">
                        <label htmlFor="">Description</label>
                        <textarea
                            value={textarea}
                            placeholder="Enter the description..."
                            onChange={(e) => setTextarea(e.target.value)}
                            rows={10}
                            cols={60}
                        />
                    </div>
                </div>
                <div className='FormBtn'><button type='submit'>Submit</button></div>
            </form>

            <div className="emyData">
                <div className="table-data">
                    <h3>Name</h3>
                    <h3>Assgined</h3>
                    <h3>Completed</h3>
                    <h3>Failed</h3>
                </div>
                {
                    empData && Object.entries(empData).map(([employeeName, details], index) => (
                        <div key={index} id="tbl" className="emp1">
                            <h4>{employeeName}</h4>
                            <h4>{details.TaskList.NewTask}</h4>
                            <h4>{details.TaskList.Complete}</h4>
                            <h4>{details.TaskList.TaskFailed}</h4>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default DashboardAdmin