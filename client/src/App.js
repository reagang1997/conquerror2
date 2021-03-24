import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Home from './Pages/Home';
import AdminLand from './Pages/AdminLand';
import CreateChamp from './Pages/CreateChamp';
import AddResults from './Pages/AddResults';
import SearchResults from './Pages/SearchResults';

function App() {
  return (
    <Router>
      <NavTabs/>
      <Route exact path="/" component={Home} />
      <Route exact path="/adminHome" component={AdminLand} />
      <Route  path='/createChampionship' component={CreateChamp} />
      <Route  path='/addResults' component={AddResults} />
      <Route path='/searchResults' component={SearchResults}/>;
    </Router>
  );
}

export default App;
