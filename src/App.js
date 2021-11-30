import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <HomePage></HomePage>
    </div>
  );
}

export default App;
