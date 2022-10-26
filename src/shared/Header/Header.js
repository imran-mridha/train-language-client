import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      return alert('Logout successfull')
    })
    .catch(error => console.error(error))
  }
  return (
    <div className="navbar bg-cyan-900 lg:px-10">
      <div className="navbar navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-7 p-2 shadow bg-cyan-800 rounded-box w-52">
            <li><Link className='hover:bg-cyan-300 text-white hover:text-cyan-900 font-semibold' to='/home'>Home</Link></li>
            <li><Link className='hover:bg-cyan-300 text-white hover:text-cyan-900 font-semibold' to='/courses'>Courses</Link></li>
            <li><Link className='hover:bg-cyan-300 text-white hover:text-cyan-900 font-semibold' to='/faq'>Faq</Link></li>
            <li><Link className='hover:bg-cyan-300 text-white hover:text-cyan-900 font-semibold' to='/blog'>Blog</Link></li>
            <li><Link className='hover:bg-cyan-300 text-white hover:text-cyan-900 font-semibold' to='/contact'>Contact</Link></li>
            <input type="checkbox" className="toggle ml-4 mt-3" checked />
          </ul>
        </div>
        <Link to='/'>
          <img className='w-8 md:w-16' src={logo} alt="" />
          <span className=" text-xl md:text-2xl uppercase font-bold text-white">Train <span className='text-cyan-300'>Language</span> </span>

        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu navbar navbar-center menu-horizontal p-0">
          <li><Link className='text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-3' to='/home'>Home</Link></li>
          <li><Link className='text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-2' to='/courses'>Courses</Link></li>
          <li><Link className='text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-2' to='/faq'>Faq</Link></li>
          <li><Link className='text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-2' to='/blog'>Blog</Link></li>
          <li><Link className='text-white font-semibold uppercase hover:bg-cyan-300 hover:text-cyan-900 mr-2' to='/contact'>Contact</Link></li>
          <input type="checkbox" className="toggle mr-3" checked />
        </ul>
      </div>
      <div className="navbar navbar-end">
        {
          user?.uid && user.emailVerified ?
            <div className="flex">
              <div>
                <button onClick={handleLogOut} className='border border-cyan-300 py-2 px-4 rounded-lg text-white hover:bg-cyan-300 hover:text-cyan-900'>Log Out</button>
              </div>
              <div>
                <Link to ='/profile'><img title={user?.displayName} className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" /></Link>
              </div>
            </div>
            :
            <div>
              <Link to='/login'>
                <button className='border border-cyan-300 py-2 px-4 rounded-lg text-white hover:bg-cyan-300 hover:text-cyan-900'>Login</button>
              </Link>
            </div>
        }


      </div>
    </div>
  );
};

export default Header;