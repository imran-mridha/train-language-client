import React from 'react';
import { Outlet} from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default Main;