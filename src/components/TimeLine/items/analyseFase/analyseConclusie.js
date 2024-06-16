import ItemManager from "../itemManager";

const manager = new ItemManager;

const cardParagraphs = [
    "- Users can view their own transaction history. (functional)",
    "- The complete transaction history is saved. (non-functional)",
    "Het bijhouden van alle transacties maakt het mogelijk voor gebruikers om deze in te zien, \
    plus het maakt het makkelijk om verdachte activiteit op te sporen."
];

const item = manager.createItemFromProps(
    null,
    "Requirements",
    null,
    "Om deze eisen vast te leggen zijn de volgende requirements opgezet:",
    cardParagraphs,
    null,
    null
);

export default item;
