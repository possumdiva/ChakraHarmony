import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./style.css";
import RootChakra from './components/RootChakra';
import SacralChakra from './components/SacralChakra';
import SolarPlexusChakra from './components/SolarPlexusChakra';
import HeartChakra from './components/HeartChakra';
import Quiz from './components/quiz';
import ThroatChakra from "./components/ThroatChakra";
import ThirdEyeChakra from "./components/ThirdEyeChakra";
import CrownChakra from "./components/CrownChakra";
import Result from "./components/Result";


class App extends Component {

  render() {
    return (
      <div className="nav">
        

        <Router>
          <Link to="/">Quiz</Link>
          <Link to="/result">Results</Link>
          <Link to="/root">Root</Link>
          <Link to="/sacral">Sacral</Link>
          <Link to="/solarplexus">Solar Plexus</Link>
          <Link to="/heart">Heart</Link>
          <Link to="/throat">Throat</Link>
          <Link to="/thirdeye">Third Eye</Link>
          <Link to="/crown">Crown</Link>
          <Switch>
            <Route exact path="/" component={Quiz} />
            <Route path="/result" component={Result} />
            <Route path="/root" component={RootChakra} />
            <Route path="/sacral" component={SacralChakra} />
            <Route path="/solarplexus" component={SolarPlexusChakra} />
            <Route path="/heart" component={HeartChakra} />
            <Route path="/throat" component={ThroatChakra} />
            <Route path="/thirdeye" component={ThirdEyeChakra} />
            <Route path="/crown" component={CrownChakra} />
          </Switch>


        </Router>

        

      </div>)
  }
}


export default App;
