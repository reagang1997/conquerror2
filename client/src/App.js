import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './Pages/Home';
import AdminLand from './Pages/AdminLand';
import CreateChamp from './Pages/CreateChamp';
import AddResults from './Pages/AddResults';
import SearchResults from './Pages/SearchResults';
import TheResultCard from './components/ResultsCard';
import EditChamp from './Pages/EditChamp';

function App() {
  const [search, setSearch] = useState({ champName: '' });

  const [champID, setChampID] = useState('');

  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <NavTabs isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <Route exact path="/">
        <Home search={search} setSearch={setSearch} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <Route exact path="/adminHome">
          <AdminLand champID={champID} setChampID={setChampID} isLoggedIn={isLoggedIn}/>
      </Route>
      <Route path='/createChampionship' component={CreateChamp} />
      <Route path='/editChamp'>
        <EditChamp champID={champID} setChampID={setChampID}/>
      </Route>
      <Route path='/addResults' component={AddResults} />
      <Route path='/searchResults'>
        <SearchResults search={search} setSearch={setSearch} champID={champID} setChampID={setChampID}/>
      </Route>
      <Route path='/results'>
        <TheResultCard champID={champID}/>
      </Route>
    </Router>
  );
}

export default App;
