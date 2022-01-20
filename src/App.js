import Navbar from "./components/Navbar/navbar"
import Home from "./components/Home/Home"
import Artist from "./components/Artist/Artist";
import Roadmap from "./components/Roadmap/Roadmap";
import Faq from "./components/FAQ/FAQ"
function App() {
  return (
    <div className="body-bg">
    <Navbar />
    <Home />
    <Artist/>
    <Roadmap/>
    <Faq/>
    </div>
  );
}

export default App;
