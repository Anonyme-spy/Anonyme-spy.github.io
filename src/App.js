import "./App.css";
import BioSection from "./js/bio";
import HeaderSec from "./js/header";
import Footer from "./js/footer";
import Menu from "./js/main";
import Navbar from "./js/nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSec />
      <BioSection />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
