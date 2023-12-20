import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import ListView from './components/ListView';
import Profile from './components/Profile';
import { NavbarDefault } from './components/Navbar';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavbarDefault />
      <Routes>
        <Route exact path="/" Component={RegistrationForm} />
        <Route exact path="/list" Component={ListView} />
        <Route exact path="/profile/:id" Component={Profile} />
      </Routes>
    </Router>
  );
};

export default App;
