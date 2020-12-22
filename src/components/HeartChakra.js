import React from "react";
import Heart from "./images/Heart.jpeg";


function HeartChakra() {
    return (
        <div className="chakra-pages">
            <h1 className="glow">Heart Chakra</h1>
            <div className="image-topper">
                <img className="images" src={Heart} />
            </div>
            <div className="c-title">Anahata</div>
            <div className="c-title">Air</div>
            <div className="c-title">Green</div>
            <div className="questionBox">
                The fourth chakra is the energy center in which we feel joy, compassion, and love, not only for others but also for ourselves. It paves the pathway to our relationships with others and it establishes our own self-worth.
            Physically speaking, this chakra supports our heart, lungs, upper torso, shoulders, hands, and arms. An imbalanced heart chakra can cause feelings of unworthiness, heart issues, anxiety, low self esteem, paranoia, low energy, poor digestion, and anger (among many others).            </div>
            <h1 className="mid-page-items"> Ways to Bring Chakra Into Balance</h1>
            <div className="questionBox">
                <h1 className="mid-page-items">Foods</h1>
                <ul>
                    <li>Kale</li>
                    <li>Broccoli</li>
                    <li>Spinach</li>
                    <li>Chard</li>
                    <li>Dandelion Greens</li>
                    <li>Parsley</li>
                    <li>Celery</li>

                    <li>Cucumber</li>
                    <li>Zucchini</li>
                    <li>Matcha</li>
                    <li>Green Tea</li>
                    <li>Avocado</li>
                    <li>Lime</li>
                    <li>Mint</li>

                    <li>Peas</li>
                    <li>Kiwi</li>
                    <li>Spirulina</li>
                    <li>Green Apples</li>
                    <li>Green Curry</li>
                    <li>Basil</li>
                    <li>Oregano</li>

                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Crystals</h1>
                <ul>
                    <li>Rose Quartz</li>
                    <li>Jade</li>
                    <li>Green Calcite</li>
                    <li>Green Tourmaline</li>
                    <li>Green Aventurine</li>
                    <li>Green Jasper</li>
                    <li>Emerald</li>
                    <li>Malachite</li>
                    <li>Moss Agate</li>
                    <li>Chrysoprase</li>
                    <li>Peridot</li>
                    <li>Dipotase</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Essential Oils</h1>
                <ul>
                    <li>Rose </li>
                    <li>Jasmine</li>
                    <li>Copaiba</li>
                    <li>Neroli</li>
                    <li>Palmarosa</li>
                    <li>Lavendar</li>
                    <li>Geranium</li>
                    <li>Eucalyptus</li>
                    <li>Chamomile</li>
                    <li>Melissa</li>
                    <li>Sweet Majoram</li>
                </ul>
            </div>

            <div className="questionBox">
                <h1 className="mid-page-items">Activities</h1>
                <ul>
                    <li>Spending time with loved ones </li>
                    <li>Volunterring at a meaningful place</li>
                    <li>Writing a handwritten letter to a friend</li>
                    <li>Spending time with Animals</li>
                    <li>Cooking Homemade meal</li>
                    <li>Listening to a friend in need</li>
                </ul>
            </div>
            <button className="submit-button-return">Return to results page</button>
            <div></div>
        </div>

    );
}

export default HeartChakra;