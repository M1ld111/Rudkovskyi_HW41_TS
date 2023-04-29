import React from 'react';
import './App.css';
import TodoProvider from './providers/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '20px'
        }}
      >
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <TodoProvider>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <TodoForm />
          <TodoList />
        </Box>
      </TodoProvider>
      </Box>
    </div>
  );
}

export default App;
