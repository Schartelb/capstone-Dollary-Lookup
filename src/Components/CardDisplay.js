import React from "react";

const CardDisplay = ({ singleCard }) => {
    return (
        <>
            {singleCard === null ? <img className="mtg-card" src="https://i.imgur.com/LdOBU1I.jpeg" alt="Magic Card Back" /> :
                singleCard.prices.usd < 1 ?
                    <img className="mtg-card"
                        src={singleCard.image_uris.normal}
                        alt={singleCard.name}
                        title={singleCard.name} /> :
                    <img className="mtg-card illegal"
                        src={singleCard.image_uris.normal}
                        alt={singleCard.name} 
                        title={singleCard.name}/>}
        </>)
}

export default CardDisplay