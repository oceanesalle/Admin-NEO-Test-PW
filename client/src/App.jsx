import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from './contexts/UserContext.js';
import { UxContext } from './contexts/UxContext.js';
import DashboardLink from './components/DashboardLink/DashboardLink';
import DashboardRecipe from './admin/DashboardRecipe/DashboardRecipe';
import AddRecipe from './admin/AddRecipe/AddRecipe';
import EditRecipe from './admin/EditRecipe/EditRecipe';
import Recipe from './pages/Recipe/Recipe';
import { ProtectedRoute } from './protected/ProtectedRoute.js';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './admin/Login/Login';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menu, setMenu] = useState('user');
  const [user, setUser] = useState({});



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/security/user-is-auth', {
          headers: {
            'x-access-token': token,
          },
        })
        .then(({ data }) => {
          if (data.auth) {
            setIsAuthenticated(true);
            setUser(JSON.parse(localStorage.getItem('user')));
          }
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      <UxContext.Provider
        value={{
          menu,
          setMenu,
        }}
      >
  <Router>      
         {menu === 'user' ? <Navbar /> : ''}
        {isAuthenticated && <DashboardLink />}
 <main className="grid">

 
    <Routes>
  <Route exact path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/recipe" element={<Recipe/>} />

  <Route path="admin" element={<ProtectedRoute />}>
  <Route path="recipe" element={<DashboardRecipe />} />
  <Route path="recipe/add" element={<AddRecipe />} />
  <Route path="recipe/edit/:id" element={<EditRecipe />} />
  </Route>
   </Routes>

  
   
  </main>
  </Router>
  

  </UxContext.Provider>
  </UserContext.Provider>
  );
};

export default App; 
