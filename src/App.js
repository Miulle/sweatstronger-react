import './App.css';

import { Navbar } from './Components/Header/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Team } from './Components/Team';
import { Competitions } from './Components/Competitions';

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <section className='sec-1' id='home'>
          <Home />
        </section>
        <section className='sec-2' id='about'>
          <About />
        </section>
        <section className='sec-3' id='competitions'>
          <Competitions />
        </section>
        <section className='sec-4' id='team'>
          <Team />
        </section>
      </div>
    </div>
  );
}

export default App;
