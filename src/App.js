import './App.css';

// import router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import CountryGeneral from './pages/CountryGeneral';
import CountryDetails from './pages/CountryDetails';
import CountryForm from './pages/CountryForm';
import Err404 from './pages/Err404'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={CountryGeneral} />
          <Route path="/details/:country" exact component={CountryDetails} />
          <Route path='/CountryForm' exact component={CountryForm} />
          <Route component={Err404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
