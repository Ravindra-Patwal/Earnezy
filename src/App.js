import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
