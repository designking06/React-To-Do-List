import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pages } from './pages';

import NavBar from './components/NavBar/NavBar';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <BrowserRouter>
    <main className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          {pages.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </header>
    </main>
    </BrowserRouter>
  );
}

export default App;
