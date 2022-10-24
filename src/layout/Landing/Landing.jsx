
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Members from './components/Members';
import About from './components/About';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function Landing() {

  return (
    <div className="App flex flex-col ">
      <NavBar />
      <Hero />
      <Members />
      <About />
      <Technologies />
      <Footer />
    </div>
  );
}
export default Landing;