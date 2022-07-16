
import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Events from './components/Events';
import Exclusive from './components/Exclusive';
import Footer from './components/Footer';
import Gift from './components/Gift';
import Map from './components/Map';
import Teppanyaki from './components/Teppanyaki';
import Tradition from './components/Tradition';

function App() {
  return (
    <div>
      <Banner></Banner>
      <Tradition></Tradition>
      <Teppanyaki></Teppanyaki>
      <Events></Events>
      <Gift></Gift>
      <Exclusive></Exclusive>
      <Contact></Contact>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

export default App;
