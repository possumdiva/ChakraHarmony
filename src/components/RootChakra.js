import React from "react";
import Root from "./images/Root.jpeg";


function RootChakra() {
    return (
        <div className="chakra-pages">
            <h1 className="glow">Root Chakra</h1>
            <div className="image-topper">
                <img className="images" src={Root} />
            </div>
            <div className="c-title">Muladhara</div>
            <div className="c-title">Earth</div>
            <div className="c-title">Red</div>
            <div className="questionBox">
                The first chakra is the energy center in which supports our entire foundation. It connects us to the earth and everything around us. It is also the most common chakra to experience blockage or weakness.
                It controls our survival instincts, security, fight-or-flight, and fear. Physically, it supports our legs, feet, and foundation. An imbalanced root chakra may cause issues with the legs, feet, digestive system, and emotional imbalances which cause feelings of not being supported, insecurity, loneliness, or fear.
            </div>
            <h1 className="mid-page-items"> Ways to Bring Chakra Into Balance</h1>
            <div className="questionBox">
                <h1 className="mid-page-items">Foods</h1>
                <ul>
                    <li>Red Apples</li>
                    <li>Beets</li>
                    <li>Tomatoes</li>
                    <li>Pomegranates</li>
                    <li>Strawberries</li>
                    <li>Raspberries</li>
                    <li>Sweet Potatoes</li>

                    <li>Onions</li>
                    <li>Carrots</li>
                    <li>Turnips</li>
                    <li>Garlic</li>
                    <li>Parsnips</li>
                    <li>Rutabega</li>
                    <li>Ginger</li>

                    <li>Eggs</li>
                    <li>Beans</li>
                    <li>Nuts</li>
                    <li>Paprika</li>
                    <li>Cumin</li>
                    <li>Horseradish</li>
                    <li>Cayenne</li>

                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Crystals</h1>
                <ul>
                    <li>Red Carnelian</li>
                    <li>Red Jasper</li>
                    <li>Bloodstone</li>
                    <li>Black Tourmaline</li>
                    <li>Obsidian</li>
                    <li>Hematite</li>
                    <li>Fire Agate</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Essential Oils</h1>
                <ul>
                    <li>Nutmeg </li>
                    <li>Patchouli</li>
                    <li>Vetiver</li>
                    <li>Bergamot</li>
                    <li>Myrrh</li>
                    <li>Cedarwood</li>
                    <li>Frankincense</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Activities</h1>
                <ul>
                    <li>Gardening </li>
                    <li>Stomp feet</li>
                    <li>Hiking</li>
                    <li>Walking Barefoot</li>
                    <li>Tending Houseplants</li>
                    <li>Cleaning Your Home</li>
                    <li>Hot Bath</li>
                </ul>
            </div>

        </div >
    );
}

export default RootChakra;