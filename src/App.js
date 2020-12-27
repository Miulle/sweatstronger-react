import logo from './logo.svg';
import './App.css';

import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Team } from './Components/Team';
import { Competitions } from './Components/Competitions';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='competitions'>
          <Competitions />
        </section>
        <section id='team'>
          <Team />
        </section>
      </div>
    </div>
  );
}

export default App;
