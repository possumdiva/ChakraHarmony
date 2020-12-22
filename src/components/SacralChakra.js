import React from "react";
import Sacral from "./images/Sacral.jpeg";

function SacralChakra() {
    return (
        <div className="chakra-pages">
            <h1 className="glow">Sacral Chakra</h1>
            <div className="image-topper">
                <img className="images" src={Sacral} />
            </div>
            <div className="c-title">Svadhisthana</div>
            <div className="c-title">Water</div>
            <div className="c-title">Orange</div>
            <div className="questionBox">
                The sacral chakra, or swadisthana chakra in Sanskrit, has received the nicknames, “the sex chakra,” “the social chakra,” and “the creation chakra.” Located in the center of the lower belly or, as some believe, in the genital area, it acts as the individual’s center of pleasure and passion — both sensually and creatively.
            This chakra governs reproductive systems and processes, sexuality, relationships, emotions, and sense of adventure.            </div>
            <h1 className="mid-page-items"> Ways to Bring Chakra Into Balance</h1>
            <div className="questionBox">
                <h1 className="mid-page-items">Foods</h1>
                <ul>
                    <li>Carrots</li>
                    <li>Mango</li>
                    <li>Oranges</li>
                    <li>Orange Peppers</li>
                    <li>Peaches</li>
                    <li>Apricots</li>
                    <li> Sweet Potatoes</li>

                    <li>Salmon</li>
                    <li>Flax</li>
                    <li>Almonds</li>
                    <li>Walnuts</li>
                    <li>Sesame</li>
                    <li>Coconut/Water</li>
                    <li>Cinnamon</li>



                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Crystals</h1>
                <ul>
                    <li>Citrine</li>
                    <li>Carnelian</li>
                    <li>Moonstone</li>
                    <li>Coral</li>
                    <li>Orange Calcite</li>
                    <li>Orange Adventurine</li>
                    <li>Snowflake Obsidian</li>
                    <li>Amber</li>
                    <li>Tourmaline</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Essential Oils</h1>
                <ul>
                    <li>Cardamom </li>
                    <li>Patchouli</li>
                    <li>Sandalwood</li>
                    <li>Bergamot</li>
                    <li>Jasmine</li>
                    <li>Neroli</li>
                    <li>Orange</li>
                    <li>Clary Sage</li>
                    <li>Cinnamon Bark</li>
                    <li>Ylang Ylang</li>
                    <li>Rosewood</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Activities</h1>
                <ul>
                    <li>Spending time by the water </li>
                    <li>Go swimming</li>
                    <li>Hiking</li>
                    <li>Creative art projects</li>
                    <li>Dancing</li>
                    <li>Singing</li>
                    <li>Hot Bath</li>
                </ul>
                
            </div>
            <button className="submit-button-return">Return to results page</button>

        </div>
    );
}

export default SacralChakra;