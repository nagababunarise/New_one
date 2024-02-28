import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MenuNav from "./components/MenuNav";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <MenuNav />
      <ItemCard />
    </div>
  );
}

export default App;
