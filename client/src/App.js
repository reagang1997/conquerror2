import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Home from './Pages/Home';
import AdminLand from './Pages/AdminLand';
import CreateChamp from './Pages/CreateChamp';

function App() {
  return (
    <Router>
      <NavTabs/>
      <Route exact path="/" component={Home} />
      <Route exact path="/adminHome" component={AdminLand} />
      <Route exact path='/createChampionship' component={CreateChamp} />
      
    </Router>
  );
}

export default App;
