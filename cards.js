// Set Up Deck

const deck = ["CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK", "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK", "SA", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK"];
let houseHand = [];
let gameHand =[];
    
function dealCards() {
    for (let i= 0; i < 2; i++) {
        let index = Math.floor(Math.random() * 52);
        houseHand.push(deck[index]);
        deck.splice(index, 1);
    }

    for (let i= 0; i < 2; i++) {
        let index = Math.floor(Math.random() * 52);
        gameHand.push(deck[index]);
        deck.splice(index, 1);
    }
}