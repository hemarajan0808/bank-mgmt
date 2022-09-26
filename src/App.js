import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import depositPage from "./Components/depositPage";
import withdrawPage from "./Components/withdrawPage";
import homePage from "./Components/homePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <Link to="/" className="App-link">
                Home
              </Link>
            </li>
            <li className="li-style">
              <Link to="/deposit" className="App-link">
                {" "}
                Deposit{" "}
              </Link>
            </li>
            <li className="li-style">
              <Link to="/withdraw" className="App-link">
                Withdraw{" "}
              </Link>
            </li>
          </ul>

          <Route path="/deposit" exact component={depositPage} />
          <Route path="/withdraw" exact component={withdrawPage} />
          <Route path="/" exact component={homePage} />

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
