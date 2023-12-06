import './App.css';
import Fynatrack from './routes/fynatrack';
import FynatrackPrivacy from './routes/fynatrack_privacy';
import Home from './routes/home'
import ContactUs from './routes/contactus';

import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/contact-us' element={<ContactUs />}/>
                <Route exact path='/fynatrack' element={<Fynatrack />}/>
                <Route exact path='/fynatrack-privacy' element={<FynatrackPrivacy />}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
