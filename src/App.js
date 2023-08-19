import './App.css';
import DisplayPage from './Components/DisplayPage';
import {HashRouter} from "react-router-dom";
function App() {
  return (
    <HashRouter className="App">
      <DisplayPage/>
    </HashRouter>
  );
}

export default App;
