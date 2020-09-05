import React from 'react';
import './theme/App.css';
import Login from './components/Login';
import UserList from './components/UserList';
import { RootState } from './services/store';
import { useSelector } from 'react-redux';

function App() {

  const isLogged = useSelector<RootState>(state => state.session.isLogged);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bem vindo, <code>POWERDEV</code>
        </p>
      </header>
      <div id="wrapper">
        { !isLogged ? <Login /> : <UserList /> }
      </div>
    </div>
  );
}

export default App;
