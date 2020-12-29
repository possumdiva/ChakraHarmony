import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <div className="navbar">
    <Link to="/">Quiz</Link>
    <Link to="/result">Results</Link>
    <Link to="/root">Root</Link>
    <Link to="/sacral">Sacral</Link>
    <Link to="/solarplexus">Solar Plexus</Link>
    <Link to="/heart">Heart</Link>
    <Link to="/throat">Throat</Link>
    <Link to="/thirdeye">Third Eye</Link>
    <Link to="/crown">Crown</Link>
  </div>
)
