import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './GlobalState';
import NavbarControls from './Components/NavbarControls';
import HeadlinesNavbar from './Components/HeadlinesNavbar';
import NavMenu from './Components/NavMenu';
import UserLogin from './Components/UserLogin';
import ArticlePage from './Components/ArticlePage';
import HomePage from './Components/HomePage';
import About from './Components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NavbarProvider } from './NavbarState';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalProvider>
          
          <header>
                  <NavbarProvider>
                      <NavbarControls />
                  </NavbarProvider>
      
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
                          <ArticlePage />
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
