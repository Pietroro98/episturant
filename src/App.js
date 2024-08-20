import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //importo bootstrap per farlo funzionare
import CustomNavbar from './components/CustomNavbar';


function App() {
  return (
    <div>
    <header>
      <CustomNavbar/>
    </header>
    <main>
    <h2 className='text-center mt-5'>il carosello andrà qui</h2>
    </main>
    </div>
  );
}

export default App;
