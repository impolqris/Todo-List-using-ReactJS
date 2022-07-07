import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TodoList from './components/todo';

function App() {

  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="5vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <h2>Todoifer</h2>
            <br />
            <TodoList />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
