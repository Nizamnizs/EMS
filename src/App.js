import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AdminHome from './Pages/AdminHome';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Add from './Pages/Add';
import Employess from './Pages/Employess';
import Pnf from './Pages/Pnf';
import View from './Pages/View';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      
  <Header></Header>
     <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/home' element={<AdminHome></AdminHome>}></Route>
      <Route path='/add' element={<Add></Add>}></Route>
      <Route path='/employee-mng' element={<Employess></Employess>}></Route>
      <Route path='*' element={<Pnf></Pnf>}></Route>
      <Route path='/view/:id' element={<View></View>}></Route>
      <Route path='/edit/:id' element={<Edit></Edit>}></Route>



     </Routes>
<Footer></Footer>
    
    </div>
  );
}

export default App;
