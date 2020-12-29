import React from "react";
import ThirdEye from "./images/ThirdEye.jpeg";
import { Link } from "react-router-dom";
import {NavBar} from './NavBar';
function ThirdEyeChakra() {
    return (
        <div className="chakra-pages">
            <NavBar />
            <h1 className="glow">Third Eye Chakra</h1>
            <div className="image-topper">
                <img className="images" src={ThirdEye} alt="third eye chakra image"/>
            </div>
            <div className="c-title">Ajna</div>
            <div className="c-title">Light</div>
            <div className="c-title">Indigo</div>
            <div className="questionBox">
            The sixth chakra is the third-eye or the brow chakra. This chakra, located on the forehead between our eyes, literally translates into “to perceive.” Known as being the center of wisdom, this chakra’s element is light. A balanced third-eye chakra allows us to see clearly, focus, and trust our own intuitions. The chakra’s energy stems from our purpose, ability to grow, and desire to constantly learn. An imbalanced sixth chakra can lead to feeling a lack of direction or purpose in our life. 
            Physically supporting the frontal sinuses, ears, and eyes, an imbalance in this chakra can also cause tension headaches, blurry vision, coordination/balance problems, and sleep disturbances.            </div>
            <h1 className="mid-page-items"> Ways to Bring Chakra Into Balance</h1>
            <div className="questionBox">
                <h1 className="mid-page-items">Foods</h1>
                <ul>
                    <li>Purple Grapes</li>
                    <li>Purple Kale</li>
                    <li>Blueberries</li>
                    <li>Purple Cabbage</li>
                    <li>Eggplant</li>
                    <li>Purple Carrots</li>
                    <li>Cocao</li>

                    <li>Goji Berries</li>
                   

                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Crystals</h1>
                <ul>
                    <li>Amethyst</li>
                    <li>Purple Flourite</li>
                    <li>Black Obsidian</li>
                    <li>Amazonite</li>
                    <li>Clear Quartz</li>
                    
                    
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Essential Oils</h1>
                <ul>
                    <li>Lavendar </li>
                    <li>German and Roman Chamomile</li>
                    <li>Lemon</li>
                    <li>Sandalwood</li>
                    <li>Rosemary</li>
                    <li>Ylang Ylang</li>
                    <li>Frankincense Serrata</li>

                    <li>Clary Sage</li>
                    <li>Pine</li>
                    <li>Vanilla</li>
                    <li>Balsam of Peru</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Activities</h1>
                <ul>
                    <li>Creating a Vision Board </li>
                    <li>Meditation</li>
                    <li>Keeping a dream Journal</li>
                    <li>Following What You Feel Called to Do</li>
                   
                </ul>
            </div>
            <Link to="/result" style={{ textDecoration: 'none' }}>
            <button className="submit-button">Results</button>
          </Link>
        </div >

    );
}

export default ThirdEyeChakra;