import { useEffect, useState } from 'react'
import './App.css'
import DashboardEmp from './Components/Employee/DashboardEmp'
import DashboardAdmin from './Components/Admin/DashboardAdmin'
import Login from './Components/Auth/login'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('Emp');
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user === 'Emp') {
      setIsLogin(true)
      setUser('Emp')
    }
    if (user === 'admin') {
      setIsLogin(true)
      setUser('admin')
    }
  })
  return (
    <>
      <div className='Main-content'>
        {
          isLogin ? (user === 'Emp' ? (<DashboardEmp />) : (<DashboardAdmin />)) : (<Login setUser={setUser} setIsLogin={setIsLogin} />)
        }
      </div>
    </>
  )
}

export default App
