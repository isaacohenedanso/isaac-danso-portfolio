import { Component } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/styles.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skiils";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Hero />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//

export default App;
