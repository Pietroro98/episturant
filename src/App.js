import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importo bootstrap per farlo funzionare
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import TableBooking from "./components/TableBooking";
import BookingList from "./components/BookingList"

function App() {
  return (
    <div>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <BookingList/>
        <TableBooking />
        <Home />
      </main>
    </div>
  );
}

export default App;
