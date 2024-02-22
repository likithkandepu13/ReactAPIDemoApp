//import './App.css';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <h2 align="center">React API Demo - 2200030837!</h2>
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    </div>
  );
}
export default App;