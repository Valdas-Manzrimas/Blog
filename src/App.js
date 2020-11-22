
import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
        <div className="App">
          <div className="container">
            <Navbar/>
              <Route exact path="/" component={ Home } />
                
              <Switch>
                <Route exact path="/post" component={ SinglePost } />
              </Switch>
          </div>
          <div className="phantom"></div>
          <Footer />  
        </div>
        
    </Router>
  );
}

export default App;
