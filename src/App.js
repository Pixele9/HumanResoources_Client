import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './screens/LoginPage';
import IndexPage from './screens/IndexPage';
import NewEmployee from './screens/NewEmployee';
import SearchEmployee from './screens/SearchEmployee';
import ModifyEmployee from './screens/ModifyEmployee';
import RemoveEmployee from './screens/RemoveEmployee';

function App() {
  return (
    <Router basename="/human_resources">
        <Switch>
          <Route exact path="/" component={ IndexPage } />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/newEmployee" component={ NewEmployee } />
          <Route exact path="/search/:name" component={ SearchEmployee } />
          <Route exact path="/edit/:id" component={ ModifyEmployee } />
          <Route exact path="/remove/:id" component={ RemoveEmployee } />
        </Switch>
    </Router>
  );
}

export default App;
