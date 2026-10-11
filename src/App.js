import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Activities from './components/Activities';
import Attractions from './components/Attractions';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <Featured setCurrentPage={setCurrentPage} />
            <Activities />
          </>
        );
      case 'attractions':
        return <Attractions />;
      case 'enquiry':
        return <EnquiryForm />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
