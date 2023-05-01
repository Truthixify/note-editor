import CreateNewNote from "./CreateNewNote";
import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NotePage from "./NotePage"
import EditNote from "./EditNote";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateNewNote />
            </Route>
            <Route path="/notes/:id">
              <NotePage />
            </Route>
            <Route path="/edit-note/:id">
              <EditNote />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
