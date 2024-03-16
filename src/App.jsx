import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
      </div>
      <div className="container mx-auto flex">
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export default App;
