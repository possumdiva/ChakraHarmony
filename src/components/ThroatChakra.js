import React from "react";
import Throat from "./images/Throat.jpeg";
import { Link } from "react-router-dom";
import {NavBar} from './NavBar';


function ThroatChakra() {
    return (
        <div className="chakra-pages">
            <NavBar />
            <h1 className="glow">Throat Chakra</h1>
            <div className="image-topper">
                <img className="images" src={Throat} />
            </div>
            <div className="c-title">Visuddah</div>
            <div className="c-title">Akasha</div>
            <div className="c-title">Blue</div>
            <div className="questionBox">
            The fifth chakra translates, quite literally, into our ability to express ourselves and to speak. Located in the throat, this chakra focuses on the energy of true expression, intuition, integrity, honesty, and openness. An imbalance in this chakra can cause a blockage of communication, misunderstanding, and a stifled voice. 
            Physically, the chakra supports the neck, throat, jaw, and teeth, and blocked energy can cause issues with sinuses, swollen glands, and neck/shoulder pain.            
            </div>
            <h1 className="mid-page-items"> Ways to Bring Chakra Into Balance</h1>
            <div className="questionBox">
                <h1 className="mid-page-items">Foods</h1>
                <ul>
                    <li>Blueberries</li>
                    <li>Blackberries</li>
                    <li>Coconut Water</li>
                    <li>Herbal Tea</li>
                    <li>Lemon</li>
                    <li>Raw Honey</li>
                    <li>Apples</li>

                    <li>Pears</li>
                    <li>Plums</li>

                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Crystals</h1>
                <ul>
                    <li>Lapis Lazuli</li>
                    <li>Turquoise</li>
                    <li>Aquamarine</li>
                    <li>Amazonite</li>
                    <li>Blue Calcite</li>
                    <li>Flourite</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Essential Oils</h1>
                <ul>
                    <li>Geranium </li>
                    <li>Cypress</li>
                    <li>Peppermint</li>
                    <li>Eucalyptus</li>
                    <li>Lemon</li>
                    <li>Vanilla</li>
                    <li>Corander</li>
                    
                    <li>Frankincense </li>
                    <li>Tea Tree</li>
                    <li>Jasmine</li>
                    <li>Spearmint</li>
                    <li>Clove</li>
                    <li>Chamomile</li>
                    <li>Sage</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Activities</h1>
                <ul>
                    <li>Journaling </li>
                    <li>Writing Poems</li>
                    <li>Singing</li>
                    <li>Openly Expressing</li>
                    <li>Socializing</li>
                </ul>
            </div>
            <Link to="/result" style={{ textDecoration: 'none' }}>
            <button className="submit-button">Results</button>
          </Link>
        </div>
    );
}

export default ThroatChakra;