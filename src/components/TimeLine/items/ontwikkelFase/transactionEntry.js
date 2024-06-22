import ItemManager from "../itemManager";
import TransactionDbEntry from '../../../../assets/transaction-db-entry.png';



const manager = new ItemManager;

const paragraphs = [
    "De bovenstaande afbeelding toont een transactie-invoer in de MongoDB-database. \
    Zoals zichtbaar worden UTC-timestamps opgeslagen als een string. Deze timestamp wordt gegenereerd in \
    de backend-applicatie, zodat de gebruiker deze niet in zijn HTTP-verzoek kan instellen.",
];

const item = manager.createItemFromProps(
    null,
    "Transaction in de MongoDB database.",
    null,
    null,
    paragraphs,
    TransactionDbEntry,
    null
);

export default item;
