
import './App.css';


// ___________For Routing ____________

import { BrowserRouter ,Routes ,Route} from "react-router-dom"

// _________Components___Import_____---

import NavBar from './components/NavBar';
import MoviesFlex from './components/MoviesFlex';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';



function App() {
  return (
  
    <BrowserRouter>
      <NavBar/>
      <Routes>

     <Route path='/' element={<MoviesFlex/>}/>
     <Route path='/add' element={<AddUser/>}/>
     <Route path='/all' element={ <AllUsers/>}/>
     <Route path='/edit/:id' element={ <EditUser/>}/>

     </Routes>
    </BrowserRouter>
  );
}

export default App;
