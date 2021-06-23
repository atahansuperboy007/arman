import "./style.css";
import "./style.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Laptop from './comp/Laptop';
import SmartList from './comp/SmartList';
import Smart from './comp/Smart';
import Home from "./comp/Home";
import LaptopsList from "./comp/LaptopsList";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <header>
          <div className="links-list">
            <div className="logo">
              <Link className="header-link" to="/home">iStore</Link>
            </div>
            <div className="input">
              <input type="text" placeholder="Поиск" />
            </div>
            <div className="links">
              <Link className="header-link" to="/laptops">Laptops</Link>
              <Link className="header-link" to="/smart">Smartphones</Link>
            </div>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/laptops">
            <LaptopsList />
          </Route>
          <Route path="/smart">
            <SmartList />
          </Route>
          <Route path="/smartphone/:id">
            <Smart />
          </Route>
          <Route path="/laptop/:id">
            <Laptop />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
