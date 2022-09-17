import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        nav here
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
