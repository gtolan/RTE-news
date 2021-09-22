import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './GlobalState';
import Navbar from './Components/Navbar';
import HeadlinesNavbar from './Components/HeadlinesNavbar';
import NavMenu from './Components/NavMenu';
import UserLogin from './Components/UserLogin';
import Article from './Components/UserLogin';
import HomePage from './Components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalProvider>
          
          <header>
            <Navbar />
            <HeadlinesNavbar />
            <NavMenu/>
           </header>
           <section>
                    <Switch>
                        <Route path="/about">
                          <About />
                        </Route>
                        <Route path="/profile">
                          <UserLogin />
                        </Route>
                        <Route path="/article/:title">
                          <Article />
                        </Route>
                        <Route path="/" exact>
                          <HomePage />
                        </Route>
                    </Switch>
            </section>
         
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
