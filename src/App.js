import './App.css';
import { Routes,Route } from 'react-router-dom';
import Show from './components/Show';
import Update from './components/Update';
import Create from './components/Create';


function App() {
  return(

    
    <>
    <Routes>
      <Route path='/' element={<Show/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
  </>
  )
    
}

export default App;
