import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Polishing from './components/AllServicesPages/Polishing/Polishing';
import Cleaning from './components/AllServicesPages/Cleaning/Cleaning';
import Ceilings from './components/AllServicesPages/Ceilings/Ceilings';
import SoundInsulation from './components/AllServicesPages/SoundInsulation/SoundInsulation';
import Ceramics from './components/AllServicesPages/Ceramics/Ceramics';
import AntiRain from './components/AllServicesPages/AntiRain/AntiRain';
import Salon from './components/AllServicesPages/Salon/Salon';
import Films from './components/AllServicesPages/Films/Films';


const App = ( props ) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='' element={<Home state={props.state} />} />
            <Route path='/aboutUs/*' element={<AboutUs />} />
            {/* <Route path='' element={<AllServices />} /> */}
            {/* <Route path='/contacts/*' element={<Contacts />} /> */}
            {/* <Route path='/language/*' element={<Language />} /> */}
            <Route path="/allServices/films/*" element={<Films state={props.state}/>} />
            <Route path="/allServices/polishing/*" element={<Polishing prices={props.state.prices.polishing}/>} />
            <Route path="/allServices/cleaning/*" element={<Cleaning prices={props.state.prices.cleanings}/>} />
            <Route path="/allServices/ceilings/*" element={<Ceilings state={props.state}/>} />
            <Route path="/allServices/soundInsulation/*" element={<SoundInsulation state={props.state}/>} />
            <Route path="/allServices/ceramics/*" element={<Ceramics prices={props.state.prices}/>} />
            <Route path="/allServices/antiRain/*" element={<AntiRain prices={props.state.prices}/>} />
            <Route path="/allServices/salon/*" element={<Salon state={props.state}/>} />

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