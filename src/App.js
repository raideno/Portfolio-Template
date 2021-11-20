import { Home } from './pages';
import { useState, useEffect } from 'react';

export function App() {

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return !loading && (
    <Home /> 
  );
}