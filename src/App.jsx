import "./App.css";
import Backed from "./components/backed/Backed";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Special from "./components/special/Special";
import Trusted from "./components/trusted/Trusted";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Special />
      <Trusted />
      <Backed />
      <Footer />
    </div>
  );
}

export default App;
