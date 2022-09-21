import * as React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Layout />
      </Box>
    </ChakraProvider>
  );
}

export default App;
