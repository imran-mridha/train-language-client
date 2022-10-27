import React, { useContext,useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user,updateUserProfile,setLoading } = useContext(AuthContext)
  console.log(user);
  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);
  const handleProfileUpdate = (e) =>{
    e.preventDefault();
    const profile = {
      displayName: name,
      photoURL : photo
    }
    updateUserProfile(profile)
    .then(()=>{
      setLoading(false)
      toast.success('Profile Update Success', {autoClose: 500})
    })
    .catch(e => toast.error(e.message, {autoClose:500}))
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
      <div className='w-11/12 lg:w-6/12 mx-auto bg-cyan-100 rounded-lg border p-5'>
        <img className='w-48 h-48 mx-auto rounded-full border border-cyan-500 p-1 mb-3' src={user?.photoURL} alt="" />
        <p className='text-xl text-center'>User Name: <span className='text-cyan-800 font-semibold'>{user?.displayName}</span> </p>
        <p className='text-sm text-center'>{user?.email}</p>
        <div className="flex justify-center space-x-4 mt-5">
          <a href='/' rel="noopener noreferrer" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-cyan-500 hover:bg-cyan-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
              <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
            </svg>
          </a>
          <a rel="noopener noreferrer" href="/" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-cyan-500 hover:bg-cyan-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
              <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
            </svg>
          </a>
          <a rel="noopener noreferrer" href="/" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-cyan-500 hover:bg-cyan-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className='bg-cyan-900 rounded-lg border p-5 mx-10 mt-10 md:mt-0 lg:mr-20'>
        <h4 className='mt-3 text-2xl text-white'>Update Profile</h4>
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
          <div>
              <label htmlFor="email" className="text-white">Email</label>
              <input id="email" readOnly defaultValue={user?.email} name="email" type="email" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="userName" className="text-white">User Name</label>
              <input id="userName" onChange={handleNameChange}  defaultValue={user?.displayName} name="userName" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="User Name" />
            </div>
            <div>
              <label htmlFor="photoURL" className="text-white">Photo URL</label>
              <input id="photoURL" onChange={handlePhotoChange}  defaultValue={user?.photoURL} name="photoURL" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Photo URL" />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-xl font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;