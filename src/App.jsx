import React, { useState, useEffect } from 'react';
import '../src/tailwind.css';
import MainPage from './pages/MainPage';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <MainPage />}
    </>
  );
}

export default App;
