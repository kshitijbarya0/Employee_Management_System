import { useState } from 'react'
import './App.css'
import Navbar from './Components/Common/Navbar'
import DashboardEmp from './Components/Employee/DashboardEmp'
import DashboardAdmin from './Components/Admin/DashboardAdmin'
import Login from './Components/Auth/login'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('Emp');
  const [empData, setEmpData] = useState("");
  const [adminData, setAdminData] = useState("");
  return (
    <>
      <div className='Main-content'>
        {
          // <DashboardEmp empData={empData} />
          <DashboardAdmin adminData={adminData} />
        }
      </div>
    </>
  )
}

export default App
