import ItemManager from "../itemManager";
import c3Diagram from '../../../../assets/C3.png';



const manager = new ItemManager;

const paragraphs = [
    "Gebruiker transacties gaan een losse entiteit in het systeem van Pong Online worden. Om transacties volledig\
    los te koppelen van de gebruikers zal ook een nieuwe microservice opgezet moeten worden.",
];

const item = manager.createItemFromProps(
    "",
    "Microservice architectuur",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
