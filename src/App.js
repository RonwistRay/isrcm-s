import './App.css';
//import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import VerEmpleados from './pages/VerEmpleados';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component ={VerEmpleados} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

// <div className="App"><Sidebar/></div>

/*import CerrarSesion from './pages/CerrarSesion';
import CrearGrupo from './pages/CrearGrupo';
import Monitorear from './pages/Monitorear';

import VerGrupos from './pages/VerGrupos'; */