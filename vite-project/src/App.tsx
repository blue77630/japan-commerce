import './App.css'
import './media.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import { useEffect, useState } from 'react';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Help from './pages/Help';
import AnimeLoader from './components/AnimeLoader';
import HelpSection from './components/HelpSection';
import CarouselCards from './components/CarouselCards';
import Navbar from './components/Navbar';
import AuthStatus from "./components/AuthStatus";

/* Les imports des pages d'aide */
import CancelOrder from './components/HelpSectionPages/cancel-order';
import CreateAccount from './components/HelpSectionPages/create-account';
import ContactSupport from './components/HelpSectionPages/contact-support';
import PaymentMethods from './components/HelpSectionPages/payment-methods';
import AddOrder from './components/HelpSectionPages/add-order';
import TrackOrder from './components/HelpSectionPages/track-order';
/* FIN */

function Join() {
  return (
    <div className="japan-bg page-animate-in-loading">
      <HelpSection />
      <div className="join-card">
        <h2 className="japan-title dream-hover">
          ようこそ !<span className="dream-message">Welcome&nbsp;!</span>
        </h2>
        <h1>
          SoraNara
        </h1>
        <CarouselCards />
      </div>
    </div>
  )
}

function RemoveNavbar() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  if (path === '/' || path === '/help' || path.startsWith('/helpsectionpages')) {
    return null;
  }
  return <Navbar />;
}

function App(){
  return (
    <>
      <AnimeLoader />
      <Router>
        <RemoveNavbar />

        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/help" element={<Help />} />

          {/* pages d'aide */}
          <Route path="/helpsectionpages/create-account" element={<CreateAccount />} />
          <Route path="/helpsectionpages/cancel-order" element={<CancelOrder />} />
          <Route path="/helpsectionpages/contact-support" element={<ContactSupport />} />
          <Route path="/helpsectionpages/payment-methods" element={<PaymentMethods />} />
          <Route path="/helpsectionpages/add-order" element={<AddOrder />} />
          <Route path="/helpsectionpages/track-order" element={<TrackOrder />} />

          {/* app */}
          <Route path="/home" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>

        <AuthStatus />
      </Router>
    </>
  )
}

export default App