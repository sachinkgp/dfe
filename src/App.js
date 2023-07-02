import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import LoginPage from './screens/Login';
import Homepage from './screens/homepage';
import Header from './screens/header';
import Signup from './screens/signup';
import Orderpage from './screens/orderpage';
import Profilepage from './screens/profile';
function App() {
  return (
      <div>
        <BrowserRouter >
                <Header />
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path="/homepage" element={<Homepage />} />    
                    <Route path="/orderpage" element={<Orderpage />} />    
                    <Route path="/profile" element={<Profilepage />} />    
                </Routes>        
            </BrowserRouter>
      </div>
  );
}

export default App;
