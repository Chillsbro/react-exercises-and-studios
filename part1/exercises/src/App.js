import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import HobbyList from './components/HobbyList';

function App() {
  return (
    <div className="App">
       <ChoresList />
    <div className="similarComponents">
      <MovieList />
      <BookList />
      <HobbyList />
    </div>
    </div>
  );
}

export default App;
