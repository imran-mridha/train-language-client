import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router/Router';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <RouterProvider router = {router}> </RouterProvider>
  );
}

export default App;
