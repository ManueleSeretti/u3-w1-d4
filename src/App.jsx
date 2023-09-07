import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import Footer from "./component/footer";
import Welcome from "./component/Welcome";
import books from "./data/book/horror.json";
import ListBooks from "./component/ListBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <ListBooks books={books} />
      <Footer />
    </div>
  );
}

export default App;
