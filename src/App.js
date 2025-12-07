import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AboutPc } from "./components/About-pc";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <AboutPc />
      </main>
    </div>
  );
}

export default App;
