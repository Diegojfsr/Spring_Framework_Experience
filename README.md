# ReactSuspense
React, TypeScript e Vite que utilize o Suspense

### Passo a passo para rodar esse projeto localmente.

1. Instale o Vite: Primeiro, você precisa instalar o Vite. Abra o terminal e execute o seguinte comando:  
``` npm create vite@latest meu-projeto --template react-ts ```

2. Navegue até o diretório do projeto:  
``` cd meu-projeto ```

3. Instale as dependências:  
``` npm install ```

4. Crie um componente assíncrono: Crie um novo arquivo chamado ``` MeuComponente.tsx ``` na pasta src com o seguinte conteúdo:  
```
import React from 'react';
const MeuComponente: React.FC = () => {
  return <div>Componente carregado!</div>;
};
export default MeuComponente;
```
5. Modifique o arquivo ``` App.tsx ``` para usar o Suspense: Abra o arquivo ``` src/App.tsx ``` e modifique-o para usar o Suspense:  
```
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
```

6. Execute o projeto: Finalmente, execute o projeto com o comando:  
``` npm run dev ```

Isso deve iniciar o servidor de desenvolvimento e você poderá ver o componente sendo carregado com o fallback "Carregando..." enquanto o componente MeuComponente é carregado de forma assíncrona.

