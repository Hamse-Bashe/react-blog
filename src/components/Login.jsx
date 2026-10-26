import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router';

export const Login = () => {

  const { isAuthenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = ()=> {
    login();
    navigate('/create');
  }
  
  return (
    <div className='my-4 bg-white p-8 rounded shadow space-y-2'>
      <p className='text-md'>
        Login <br/>
        You must log in to access the Create Post page.
      </p>
      <button className='bg-sky-500 py-1 px-2 text-white rounded' onClick={handleLogin}>Login</button>
    </div>
  )
}
