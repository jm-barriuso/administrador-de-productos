
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './view/Detail';
import Main from './view/Main';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
