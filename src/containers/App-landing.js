import { Button } from '../components/Button';
import './../styles/app.css';
import logo from '../images/logo.png'

function App() {
  return (
    <div className="App d-flex">
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-6 m-auto">
            <Button onClick={() => alert("ACA")}> Cargar Información </Button>
            <br></br>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
