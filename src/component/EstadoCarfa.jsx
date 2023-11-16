import { useState, useEffect } from 'react';

function EstadoCarga() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if(loading) {
    return <p>Cargando...</p> 
  }

  return (
    <div>
      <h1>Contenido de la App</h1>
    </div>
  );
}

export default EstadoCarga;