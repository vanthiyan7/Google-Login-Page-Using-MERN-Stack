import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';
import Create from './pages/create'
import Mail from './pages/mail';
import Password from './pages/passcreate';
import Password2 from './pages/password2';
import Thankyou from './pages/thanks';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Signin/>}/>
         <Route path = "/create" element = {<Create/>}/>
        <Route path = "/mail" element = {<Mail/>}/>
        <Route path = "/passcreate" element = {<Password/>}/>
        <Route path = "/password2" element = {<Password2/>}/>
        <Route path = "/thanks" element = {<Thankyou/>}/> 
      </Routes>
    </Router>
  );
}


export default App;
