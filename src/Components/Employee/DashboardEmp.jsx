import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../Common/Navbar'
import './emp.css'

function DashboardEmp() {
    const [empDetails, setEmpDetails] = useState(null);
    const [userName, setUserName] = useState("")
    const handleMarkComplete = (taskIndex) => {
        const empKey = localStorage.getItem('loggedInUser');
        let allEmployeeData = JSON.parse(localStorage.getItem('employeeData'));
        const currUser = allEmployeeData[empKey]
        currUser.TaskList.Complete += 1
        currUser.AllTaskList = currUser.AllTaskList.filter((_, index) => index !== taskIndex);
        allEmployeeData[empKey] = currUser
        localStorage.setItem("employeeData", JSON.stringify(allEmployeeData));
        setEmpDetails(allEmployeeData[empKey]);

    };
    useEffect(() => {
        const empKey = localStorage.getItem('loggedInUser');
        setUserName(empKey)
        const allEmployeeData = JSON.parse(localStorage.getItem('employeeData'));
        if (empKey && allEmployeeData && allEmployeeData[empKey]) {
            setEmpDetails(allEmployeeData[empKey]);
        } else {
            console.error("Employee data not found for:", empKey);
        }
    }, []);

    if (!empDetails) return <div>Loading...</div>
    return (
        <div className='dash-board-content'>
            <Navbar name={userName} belLength={1} />
            <div className='task-list'>
                <div className="taskassgin">
                    <div id='content-area'>
                        <h3>{empDetails.TaskList.NewTask}</h3>
                        <h1>New Task</h1>
                    </div>
                </div>
                <div className="taskpendin">
                    <div id='content-area'>
                        <h3>{empDetails.TaskList.AcceptedTask}</h3>
                        <h1>Accepted</h1>
                    </div>
                </div>
                <div className="taskcompelete">
                    <div id='content-area'>
                        <h3>{empDetails.TaskList.Complete}</h3>
                        <h1>Task Complete</h1>
                    </div>
                </div>
                <div className="taskfaild">
                    <div id='content-area'>
                        <h3>{empDetails.TaskList.TaskFailed}</h3>
                        <h1>Task Failed</h1>
                    </div>
                </div>
            </div>
            <div className='All-task-list'>
                {
                    empDetails.AllTaskList.map((data, key) => {
                        return (
                            <div id="task-box" className={`tbox${key + 1}`} key={key}>
                                <div className='projectType'>
                                    <div className="WorkType">{data.WorkType}</div>
                                    <div className="date">{data.date}</div>
                                </div>
                                <div className='projectContent'>
                                    <h1>{data.Title}</h1>
                                    <p>{data.Description}</p>
                                </div>
                                <div className='markComplete'>
                                    <button onClick={() => { handleMarkComplete(key) }}>Mark Complete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default DashboardEmp
