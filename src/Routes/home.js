import React, { useState, useContext } from "react";
import SingleSearch from "../Components/SingleSearch";
import MultiSearch from "../Components/MultiSearch";
import ArchidektSearch from "../Components/ArchidektSearch";
import CardDisplay from "../Components/CardDisplay";
import DeckDisplay from "../Components/DeckDisplay";
import CardContext from "../Context/CardContext";
import DeckContext from "../Context/DeckContext";


const Home = () => {
    const [singleCard, setSingleCard] = useState(null)
    const [deckList, setDeckList] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    return (<>
        <section className="container">
            <div id="col-1">
                <h2>Welcome to Dollary Deck Check!</h2>
                <SingleSearch setSingleCard={setSingleCard} />
                <ArchidektSearch setDeckList={setDeckList} />
                <MultiSearch />
            </div>
            <div id="col-2">
                <CardDisplay singleCard={singleCard} />
            </div>
        </section>
        <section className="card-grid" id="deckDisplay">
            <DeckDisplay deckList={deckList} />
        </section>
    </>
    )
}

export default Home