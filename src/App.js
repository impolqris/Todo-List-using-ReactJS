import React from 'react';
import { ChakraProvider, Box, VStack, Grid, Alert, AlertIcon } from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TodoList from './components/todo';

function App() {

  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="5vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <h2>Todo List</h2>
            <Alert variant="subtle" maxWidth="920px" status='info'>
              <AlertIcon />
                Be sure to not add too many characters to one task as it may fill up the page very quickly.
            </Alert>
            <br></br><br></br>
            <TodoList />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
