import React from 'react';
import { Box } from '@chakra-ui/react'
import { FunctionalTitle } from './components/FunctionalTitle.tsx';
import { PureTitle } from './components/PureTitle.tsx';
import { ComponentTitle } from './components/ComponentTitle.tsx';

const App = () => {
  return (
    <Box p={36}>
      <FunctionalTitle />
      <PureTitle />
      <ComponentTitle />
    </Box>
  );
}

export default App;
