import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo/logo.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut,setLoading } = useContext(AuthContext);
  const [dark, setDark] = useState();

  const navigate = useNavigate()

  const handledDarkLight = (e) => {
    setDark(e.target.checked)
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoading(false)
        navigate('/')
        return toast.info('Logout successfull', { autoClose: 500 })
      })
      .catch(error => toast.info(error.message, { autoClose: 500 }))
  }
  return (
    <div className="navbar bg-cyan-900 lg:px-10">
      <div className="navbar navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-7 p-2 shadow bg-cyan-800 rounded-box w-52">
            <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mb-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mb-2`} to='/home'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mb-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mb-2`} to='/courses'>Courses</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mb-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mb-2`} to='/faq'>Faq</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mb-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mb-2`} to='/blog'>Blog</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mb-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mb-2`} to='/contact'>Contact</NavLink></li>
            <label htmlFor="AcceptConditions" className="relative h-6 w-14 cursor-pointer ml-3">
              <input onClick={handledDarkLight} type="checkbox" id="AcceptConditions" className="peer sr-only" />

              <span
                className="absolute inset-0 rounded-full bg-white transition peer-checked:bg-cyan-200"
              ></span>

              <span
                className="absolute inset-0 m-1 h-4 w-4 rounded-full bg-cyan-500 transition peer-checked:translate-x-6"
              ></span>
            </label>
            <span className='text-white ml-3 font-semibold'>{dark ? 'Dark' : 'Light'}</span>
          </ul>
        </div>
        <Link to='/'>
          <img className='w-8 md:w-16' src={logo} alt="" />
          <span className=" text-xl md:text-2xl uppercase font-bold text-white">Train <span className='text-cyan-300'>Language</span> </span>

        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu navbar navbar-center menu-horizontal p-0">
          <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mr-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-3`} to='/home'>Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mr-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-3`} to='/courses'>Courses</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mr-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-3`} to='/faq'>Faq</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mr-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-3`} to='/blog'>Blog</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? `bg-cyan-300 font-semibold uppercase mr-3` : `text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-3`} to='/contact'>Contact</NavLink></li>
          <label htmlFor="AcceptCondition" className="relative h-6 w-14 cursor-pointer">
            <input onClick={handledDarkLight} type="checkbox" id="AcceptCondition" className="peer sr-only" />

            <span
              className="absolute inset-0 rounded-full bg-white transition peer-checked:bg-cyan-200"
            ></span>

            <span
              className="absolute inset-0 m-1 h-4 w-4 rounded-full bg-cyan-500 transition peer-checked:translate-x-6"
            ></span>
          </label>
          <span className='text-white ml-3 font-semibold'>{dark ? 'Dark' : 'Light'}</span>
        </ul>
      </div>
      <div className="navbar navbar-end">
        {
          user?.uid ?
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img title={user?.displayName} src={user?.photoURL} alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-300 rounded-lg w-32">
                <li className='mb-2 bg-cyan-100 rounded-lg'>
                  <Link to='/profile' className="justify-between">
                    Profile
                  </Link>
                </li>
                <li className='bg-cyan-100 rounded-lg' onClick={handleLogOut}><p>Log Out</p></li>
              </ul>
            </div>
            :
            <div>
              <NavLink to='/login' className={({ isActive }) => isActive ? `bg-cyan-300 px-4 py-2 rounded-lg text-cyan-900 uppercase` : `uppercase hover:bg-cyan-300 hover:text-cyan-900 border border-cyan-300 px-4 rounded-lg py-2 text-white`}>
                <button>Login</button>
              </NavLink>
            </div>
        }

      </div>
    </div>
  );
};

export default Header;