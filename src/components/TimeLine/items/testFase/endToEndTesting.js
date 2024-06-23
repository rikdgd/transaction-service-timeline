import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Een ander onderdeel dat getest moet worden is het aanmaken van een transactie. Dit is belangrijk om te testen \
    om er zeker van te zijn dat ongeldige transacties niet aangemaakt kunnen worden. Een gebruiker met een balans \
    van 0 credits zou bijvoorbeeld niet in staat moeten zijn meer credits uit te geven.",
    "Het is moeilijk om hier zinvolle unit-tests voor te schrijven omdat hier niet één specifieke methode voor \
    wordt gebruikt. De validatie zal zich dan ook niet op één specifieke laag van de applicatie bevinden.",
    "De beste manier om dit onderdeel te testen is met behulp van end-to-end testing.",
];

const item = manager.createItemFromProps(
    null,
    "Aanmaken van transacties",
    null,
    "Incorrecte transacties moeten worden afgewezen om misbruik te voorkomen.",
    paragraphs,
    null,
    null,
);

export default item;
