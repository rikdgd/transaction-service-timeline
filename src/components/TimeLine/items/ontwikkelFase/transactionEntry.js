import ItemManager from "../itemManager";
import TransactionDbEntry from '../../../../assets/transaction-db-entry.png';



const manager = new ItemManager;

const item = manager.createItemFromProps(
    null,
    "A transaction entry in the MongoDB database.",
    null,
    null,
    null,
    TransactionDbEntry,
    null
);

export default item;
