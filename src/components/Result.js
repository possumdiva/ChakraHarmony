import React from "react";
import FullChakra from "./images/FullChakra.jpg";



function Result(root) {
    return (
        <div className="chakra-pages">
            <h1 className="glow">results</h1>
            <div className="image-topper">
                <img src={FullChakra} />
            </div>
           
            <div className="questionBox">
                Please click the links to read more about the Chakras that are out of balance below.            </div>
            <h1 className="mid-page-items"> results of Your Chakra Quiz</h1>
           
            {root >= 0 ? <h2>TRUE</h2> : <h2>FALSE</h2>}

           


           

        </div >
    );
}
export default Result;