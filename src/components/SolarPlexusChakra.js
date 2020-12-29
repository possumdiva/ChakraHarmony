import React from "react";
import SolarPlexus from "./images/SolarPlexus.jpeg";
import {NavBar} from './NavBar';

function SolarPlexusChakra() {
    return (
        <div className="chakra-pages">
            <NavBar />
            <h1 className="glow">Solar Plexus Chakra</h1>
            <div className="image-topper">
                <img className="images" src={SolarPlexus} />
            </div>
            <div className="c-title">Manipura</div>
            <div className="c-title">Fire</div>
            <div className="c-title">Yellow</div>
            <div className="questionBox">
                The third chakra represents our personal power. It controls our energy as it is related to our willpower, goals, and general purpose. Governed by ambition and action, a balanced third chakra will translate into feelings of inner peace, confidence, and self-control.
            Physically, the solar plexus supports your spleen, stomach, liver, and pancreas. An imbalanced third chakra can cause feelings of insecurity and lack of purpose, as well as stomach issues (pains, ulcers, chronic indigestion, etc.).            </div>
            <h1 className="mid-page-items"> Ways to Bring Chakra Into Balance</h1>
            <div className="questionBox">
                <h1 className="mid-page-items">Foods</h1>
                <ul>
                    <li>Pineapple</li>
                    <li>Bananas</li>
                    <li>Corn</li>
                    <li>Lemons</li>
                    <li>Yellow Curry</li>
                    <li>Oats</li>
                    <li>Brown Rice</li>

                    <li>Spelt</li>
                    <li>Farro</li>
                    <li>Beans</li>
                    <li>Sprouted Grains</li>
                    <li>Yellow Squash</li>
                    <li>Spaghetti Squash</li>
                    <li>Turmeric</li>



                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Crystals</h1>
                <ul>
                    <li>Malachite</li>
                    <li>Calcite</li>
                    <li>Citrine</li>
                    <li>Topaz</li>
                    <li>Yellow Tourmaline</li>
                    <li>Tiger's Eye</li>
                    <li>Yellow Jasper</li>
                    <li>Amber</li>
                    <li>Lemon Quartz</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Essential Oils</h1>
                <ul>
                    <li>Juniper Berry </li>
                    <li>Black Pepper</li>
                    <li>Grapefruit</li>
                    <li>Spikenard</li>
                    <li>Eucalyptus</li>
                    <li>Vetiver</li>
                    <li>Lemon</li>
                    <li>Ginger Root</li>
                    <li>Rosemary</li>

                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Activities</h1>
                <ul>
                    <li>Spend time in the sun </li>
                    <li>Eating meals in the sun</li>
                    <li>Watching sunrise or sunset</li>
                    <li>Exercising</li>
                    <li>Self-Affirmations</li>
                    <li>Exercising willpower</li>

                </ul>
            </div>
            <button className="submit-button-return">Return to results page</button>
        </div>
    );
}

export default SolarPlexusChakra;