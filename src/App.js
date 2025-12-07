import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AboutPc } from "./components/About-pc";
import { Price } from "./components/Price";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <AboutPc />
        <Price />
      </main>
    </div>
  );
}

export default App;
