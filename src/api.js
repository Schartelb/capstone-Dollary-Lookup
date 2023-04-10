import axios from "axios";

class DollaryApi {

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    const url = endpoint
    try {
      return (await axios({ url, method })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async singleGet(name) {
    const url = "https://api.scryfall.com/cards/named?fuzzy="
    name.replace(" ", "+")
    let res = await axios.get(url + name)
    return res.data
  }

  static async multiCall(cardList) {
    let cardArray = cardList.split("\n")
    let promiseList = cardArray.map(card => {
      return this.singleGet(card)
    })
    let test=this.formatResponse(promiseList)
    console.log(test)
    return test
  }

  static async archidekt(deck) {
    const url = `https://archidekt.com/api/decks/${deck}/`
    let res = await axios.get(url)
    let promiseList = res.data.cards.map(card => {
      return this.singleGet(card.card.oracleCard.name)
    })

    return (this.formatResponse(promiseList))
  }

  static formatResponse(response) {
    let deckList = []
    Promise.all(response)
      .then(values => {
        let i = 0
        values.forEach(card => {
          deckList[i] = {}
          deckList[i]["name"] = card.name
          deckList[i]["price"] = card.prices.usd ? card.prices.usd : card.prices.usd_foil
          if (card.card_faces) {
            deckList[i]["img"] = card.card_faces.map(face => {
              return face.image_uris.normal
            })
          } else {
            deckList[i]["img"] = card.image_uris.normal
          }

          deckList[i]["edhrec"] = card.related_uris.edhrec
          deckList[i]["rulings"] = card.related_uris.gatherer
          i++
        })
      })
    return deckList
  }
}
export default DollaryApi