import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Voor het aanmaken van een transactie wordt niet direct een http-verzoek gestuurd naar de backend-applicatie. \
    Er wordt eerst een 'TransactionPostModel gebruikt, deze bezit nog geen timestamp en id om te voorkomen dat deze misbruikt \
    kunnen worden om bijvoorbeeld een transactie uit te stellen tot 1000 jaar in de toekomst.",
    "De timestamp wordt door de backend-applicatie automatisch gegenereerd wanneer de transactie gegevens valide zijn.",
];

const item = manager.createItemFromProps(
    null, 
    "'TransactionPostModel'", 
    null, 
    null, 
    paragraphs, 
    null, 
    null
);

export default item;
