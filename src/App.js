
import './App.css';
import Footer from './Footer/Footer';
import SecondFooter from './Footer/SecondFooter';
import Navbar from './Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <SecondFooter/>
      <Footer/>
    </div>
  );
}

export default App;
