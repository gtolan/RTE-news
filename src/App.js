import './App.css';

import Navbar from './Components/Navbar';
import HeadlinesNavbar from './Components/HeadlinesNavbar';
import NavMenu from './Components/NavMenu';

import ArticlePage from './Components/ArticlePage';
import HomePage from './Components/HomePage';

import About from './Components/About';
import UserLogin from './Components/UserLogin';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import ScrollToTop from './Components/scrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from './store';





function App() {

  

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          
            <header>
                  <Navbar />
                  <HeadlinesNavbar />
                  <NavMenu />
            </header>
            
            <main  >
              <ScrollToTop />
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
            </main>
            <footer>
                  <Footer />
            </footer>
         
        </Provider>
      </Router>
    </div>
  );
}

export default App;
