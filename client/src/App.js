import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Home from './Pages/Home';
import AdminLand from './Pages/AdminLand';

function App() {
  return (
    <Router>
      <NavTabs/>
      <Route exact path="/" component={Home} />
      <Route exact path="/adminHome" component={AdminLand} />
      
    </Router>
  );
}

export default App;
