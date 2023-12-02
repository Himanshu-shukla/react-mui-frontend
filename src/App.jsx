// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { AppBar, Container, Drawer, List, ListItem, ListItemText, Toolbar, TextField, Button } from '@mui/material';
import BarChart from './components/BarChart';
import DataTable from './components/DataTable';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Analytics');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogin = () => {
    // Add authentication logic here based on your requirements
    // For simplicity, just set isAuthenticated to true for any input
    setIsAuthenticated(true);
  };

  const drawerItems = ['Analytics', 'Data'];

  if (!isAuthenticated) {
    return (
      <Container style={{ marginLeft: '240px' }}>
        <h2>Login</h2>
        <form>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </form>
      </Container>
    );
  }

  return (
    <Router>
      <AppBar position="static" style={{ marginLeft: '240px'}}>
        <Toolbar>
          <h2>React-Mui App</h2>
        </Toolbar>
      </AppBar>

      <Container style={{ marginLeft: '240px' }}>
        <Drawer variant="permanent">
          <List>
            {drawerItems.map((item) => (
              <ListItem
                button
                key={item}
                selected={selectedTab === item}
                onClick={() => handleTabChange(item)}
                component={Link}
                to={`/${item.toLowerCase()}`}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Routes>
          <Route path="/analytics" element={<BarChart />} />
          <Route path="/data" element={<DataTable />} />
          <Route path="/" element={<BarChart />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
