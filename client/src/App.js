import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './Pages/Home';
import AdminLand from './Pages/AdminLand';
import CreateChamp from './Pages/CreateChamp';
import AddResults from './Pages/AddResults';
import SearchResults from './Pages/SearchResults';

function App() {
  const [search, setSearch] = useState({ champName: '' });
  return (
    <Router>
      <NavTabs />
      <Route exact path="/">
        <Home search={search} setSearch={setSearch} />
      </Route>
      <Route exact path="/adminHome" component={AdminLand} />
      <Route path='/createChampionship' component={CreateChamp} />
      <Route path='/addResults' component={AddResults} />
      <Route path='/searchResults'>
        <SearchResults search={search} setSearch={setSearch}/>
      </Route>;
    </Router>
  );
}

export default App;
