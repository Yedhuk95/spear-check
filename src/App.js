import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FactCheckPage from './pages/FactCheckPage';

function App() {
  return (
    <ChakraProvider>
      <FactCheckPage />
    </ChakraProvider>
  );
}

export default App;