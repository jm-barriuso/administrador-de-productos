
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './view/Detail';
import Main from './view/Main';
import Update from './view/Update';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<Detail/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
