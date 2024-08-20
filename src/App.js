
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //importo bootstrap per farlo funzionare
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';


function App() {
  return (
    <div>
    <header>
      <CustomNavbar/>
    </header>
    <main>
    <Home/>
    </main>
    </div>
  );
}

export default App;
