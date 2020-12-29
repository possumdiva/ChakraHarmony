import React from "react";
import FullChakra from "./images/FullChakra.jpg";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import RootChakra from "./RootChakra";
import SacralChakra from "./SacralChakra";
import SolarPlexusChakra from "./SolarPlexusChakra";
import HeartChakra from "./HeartChakra";
import ThroatChakra from "./ThroatChakra";
import ThirdEyeChakra from "./ThirdEyeChakra";
import CrownChakra from "./CrownChakra";
import {NavBar} from './NavBar';




function Result({
    root,
    sacral,
    solarPlexus,
    heart,
    throat,
    thirdEye,
    crown})
     {
   
   return (
        <div className="chakra-pages">
            <NavBar />
            <h1 className="glow">Results</h1>
            <div className="image-topper">
                <img className="images" src={FullChakra} />
            </div>
           
            <div className="questionBox">
                Please click the links to read more about the Chakras that are out of balance below.            </div>
            <h1 className="mid-page-items"> Results of Your Chakra Quiz</h1>
           
            {parseInt(root)> 3 && <Link to="/root" style={{ textDecoration: 'none' }}>
            <button className="submit-button">root</button>
          </Link>}
            {parseInt(sacral)> 3 && <Link to="/sacral" style={{ textDecoration: 'none' }}>
            <button className="submit-button">sacral</button>
          </Link>}
            {parseInt(solarPlexus)> 3 && <Link to="/solarPlexus" style={{ textDecoration: 'none' }}>
            <button className="submit-button">solarPlexus</button>
          </Link>}
            {parseInt(heart)> 3 && <Link to="/heart" style={{ textDecoration: 'none' }}>
            <button className="submit-button">heart</button>
          </Link>}
            {parseInt(throat)> 3 && <Link to="/throat" style={{ textDecoration: 'none' }}>
            <button className="submit-button">throat</button>
          </Link>}
            {parseInt(thirdEye)> 3 && <Link to="/thirdEye" style={{ textDecoration: 'none' }}>
            <button className="submit-button">thirdEye</button>
          </Link>}
            {parseInt(crown)> 3 && <Link to="/crown" style={{ textDecoration: 'none' }}>
            <button className="submit-button">crown</button>
          </Link>}

           


           

        </div >
    );
}
    const mapStateToProps = state => ({
        root: state.root.rootCounter,
        sacral: state.sacral.sacralCounter,
        solarPlexus: state.solarPlexus.solarPlexusCounter,
        heart: state.heart.heartCounter,
        throat: state.throat.throatCounter,
        thirdEye: state.thirdEye.thirdEyeCounter,
        crown: state.crown.crownCounter
    })
export default connect(mapStateToProps)(Result) ;

