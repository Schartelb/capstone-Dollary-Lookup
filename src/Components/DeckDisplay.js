import React, { useEffect } from "react";
import SingleCard from "./SingleCard";
// import DeckContext from "../Context/DeckContext";


const DeckDisplay = ({ deckList }) => {

    useEffect(function populateDeck() {
returnDisplay()
    }, [deckList])

    const returnDisplay=()=>{
        return (<div className="card-grid-inner">
        {deckList !== null && <>{deckList.map(card => {
            return <SingleCard card={card} key={card.name} />
        })}</>}
    </div>)
    }
    return returnDisplay()
}
export default DeckDisplay