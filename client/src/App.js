import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
// import AllServices from './components/AllServices/AllServices';
// import Contacts from './components/Contacts/Contacts';
import Language from './components/Language/Language';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Polishing from './components/AllServices/Polishing/Polishing';
import Cleaning from './components/AllServices/Cleaning/Cleaning';
import Ceilings from './components/AllServices/Ceilings/Ceilings';
import SoundInsulation from './components/AllServices/SoundInsulation/SoundInsulation';
import Ceramics from './components/AllServices/Ceramics/Ceramics';
import AntiRain from './components/AllServices/AntiRain/AntiRain';
import Salon from './components/AllServices/Salon/Salon';

const App = ( props ) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='app-wrapper-content'>
        {/* <Home state={props.state}/> */}
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/aboutUs/*' element={<AboutUs />} />
            {/* <Route path='' element={<AllServices />} /> */}
            {/* <Route path='/contacts/*' element={<Contacts />} /> */}
            <Route path='/language/*' element={<Language />} />
            <Route path="/allServices/polishing/*" element={<Polishing />} />
            <Route path="/allServices/cleaning/*" element={<Cleaning />} />
            <Route path="/allServices/ceilings/*" element={<Ceilings />} />
            <Route path="/allServices/soundInsulation/*" element={<SoundInsulation />} />
            <Route path="/allServices/ceramics/*" element={<Ceramics />} />
            <Route path="/allServices/antiRain/*" element={<AntiRain />} />
            <Route path="/allServices/salon/*" element={<Salon />} />

            <Route path='/' element={<Footer />} />

          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;