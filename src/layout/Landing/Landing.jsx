
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Members from './components/Members';
import About from './components/About';

function Landing() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Members />
      <About />
    </div>
  );
}
export default Landing;