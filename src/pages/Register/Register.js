import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { providerLogin, createUser, verifyEmail, updateUserProfile, setLoading } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(fullName, photoURL, email, password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError('Password should have one uppercase character.');
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError('Password should have one lowwercase character.');
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError('Password should have one special case character.');
      return;
    }
    if (!/(?=.*[0-9])/.test(password)) {
      setPasswordError('Password should have one digits letter.');
      return;
    }
    if (!/.{6}/.test(password)) {
      setPasswordError('Password length should be six');
      return;
    }
    setPasswordError('');
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate('/login')
        toast.success('Account Create Successfull', { autoClose: 500 })
        hadleEmailVerify();
        handleUpdateUserProfile(fullName, photoURL)
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  const hadleEmailVerify = () => {
    verifyEmail()
      .then(() => {
        toast.info('Verify email has been sent, please verify!!', { autoClose: 500 })
      })
      .catch(e => console.error(e))
  }

  const handleGoogleRegister = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        toast.success('Login Successfull', { autoClose: 500 })
        console.log(user);
      })
      .catch(error => {
        toast.error(error.message, { autoClose: 500 });
      })
  }

  const handleGithubRegister = () => {
    providerLogin(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Login Successfull', { autoClose: 500 })
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  const handleUpdateUserProfile = (fullName, photoURL) => {
    const profile = {
      displayName: fullName,
      photoURL: photoURL
    }
    updateUserProfile(profile)
      .then(() => {
        setLoading(false)
        toast.success('Profile Update Successful', { autoClose: 500 })

      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  return (
    <div className='bg-cyan-900 p-5 w-11/12 md:w-6/12 lg:w-4/12 mx-auto my-20 rounded-lg'>
      <h4 className='mt-3 text-2xl text-white'>Create An Account</h4>
      <form onSubmit={handleRegister} className="space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlhtmlFor="fullName" className="text-white">Full Name</label>
            <input id="fullName" name="fullName" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Full Name" />
          </div>
          <div>
            <label htmlhtmlFor="photoURL" className="text-white">Photo URL</label>
            <input id="photoURL" name="photoURL" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Photo URL" />
          </div>
          <div>
            <label htmlhtmlFor="email" className="text-white">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Email" />
          </div>
          <div>

            <label htmlhtmlFor="password" className="text-white">Password</label>
            <input id="password" name="password" type="password" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Password" />
            <p className='text-red-500'>{passwordError}</p>
          </div>
          <div className="flex items-center py-2">
            <input onClick={handleAccepted} id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-500" />
            <label htmlFor="remember-me" className="ml-4 block text-sm text-white">Accept Trem & Conditions </label>
          </div>
        </div>
        <div>
          <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-xl font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" disabled={!accepted}>
            Register
          </button>
        </div>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-cyan-400"></div>
        <p className="px-3 text-sm dark:text-white">Register with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-cyan-400"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={handleGoogleRegister} aria-label="Log in with Google" className="p-3 rounded-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current text-white">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
        <button onClick={handleGithubRegister} aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current text-white">
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-white">Already Have an account?
        <Link rel="noopener noreferrer" to="/login" className="underline dark:text-cyan-400">Login</Link>
      </p>
    </div>
  );
};

export default Register;