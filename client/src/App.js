import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <NavTabs/>
      <Route exact path="/" component={Home} />
      
    </Router>
  );
}

export default App;
