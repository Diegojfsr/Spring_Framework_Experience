import React, { Suspense, lazy } from 'react';

const MeuComponente = lazy(() => import('./MeuComponente'));

const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Carregando...</div>}>
        <MeuComponente />
      </Suspense>
    </div>
  );
};

export default App;
