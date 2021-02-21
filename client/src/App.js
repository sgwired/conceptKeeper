import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ConceptState from './context/concept/ConceptState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <AuthState>
      <ConceptState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ConceptState>
    </AuthState>
  );
}

export default App;
