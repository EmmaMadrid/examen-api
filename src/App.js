import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import FirebaseImageUpload from './components/FirebaseImageUpload';
import Show from './components/Show';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Show />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Edit/:id' element={<Edit />} />
        <Route path='/FirebaseImageUpload' element={<FirebaseImageUpload />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
