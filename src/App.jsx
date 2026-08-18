import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
      </main>

      <footer className="footer">

        <div className="container">

          <p>
            © {new Date().getFullYear()} Krishani. All rights reserved.
          </p>

          <p>
            Built with React
          </p>

        </div>

      </footer>
    </>
  );
}

export default App;