import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "De functionaliteit van de transaction service is vrij simpel. Een specifieke methode is wel belangrijk \
    om te testen, namelijk de 'calculate_user_balance' functie. Deze functie berekend namelijk een gebruiker's \
    balans aan de hand van de transactie geschiedenis.",
    "Wanneer deze functionaliteit niet goed werkt, zou dit kunnen betekenen dat gebruikers bijvoorbeeld meer credits \
    kunnen uitgeven dan zij bezitten. Dit is zeker niet de bedoeling.",
    "Dit is de perfecte situatie voor een unit-test, en dit is hier dan ook voor gebruikt."
];

const item = manager.createItemFromProps(
    null,
    "Uitrekenen van gebruikers balans",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
