import React from "react";
import FullChakra from "./images/FullChakra.jpg";
import { connect } from "react-redux";
import RootChakra from "./RootChakra";
import SacralChakra from "./SacralChakra";
import SolarPlexusChakra from "./SolarPlexusChakra";
import HeartChakra from "./HeartChakra";
import ThroatChakra from "./ThroatChakra";
import ThirdEyeChakra from "./ThirdEyeChakra";
import CrownChakra from "./CrownChakra";




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
            <h1 className="glow">Results</h1>
            <div className="image-topper">
                <img className="images" src={FullChakra} />
            </div>
           
            <div className="questionBox">
                Please click the links to read more about the Chakras that are out of balance below.            </div>
            <h1 className="mid-page-items"> Results of Your Chakra Quiz</h1>
           
            
             
            <p className="list">{root}</p>
            <p className="list">{sacral}</p>
            <p className="list">{solarPlexus}</p>
            <p className="list">{heart}</p>
            {/* {parseInt(heart)> 3 && (<p>{heart}</p>)} */}
            <p className="list">{throat}</p>
            <p className="list">{thirdEye}</p>
            <p className="list">{crown}</p>
            {parseInt(root)> 3 && <p>test{RootChakra}</p>}
            {parseInt(sacral)> 3 && <p>test{SacralChakra}</p>}
            {parseInt(solarPlexus)> 3 && <p>test{SolarPlexusChakra}</p>}
            {parseInt(heart)> 3 && <p>test{HeartChakra}</p>}
            {parseInt(throat)> 3 && <p>test{ThroatChakra}</p>}
            {parseInt(thirdEye)> 3 && <p>test{ThirdEyeChakra}</p>}
            {parseInt(crown)> 3 && <p>test{CrownChakra}</p>}

           


           

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

