import ItemManager from "../itemManager";
import TransactionClassImage from '../../../../assets/transaction-class.png';

const manager = new ItemManager;

const paragraphs = [
    "Er zijn op het gebied van software deverlopment altijd meerdere manieren om iets te maken.\
    Eerst moet daarom worden uitgezocht welke manier het beste zal zijn.",
    "Voor het bijhouden van transacties is uiteindelijk de keuze gemaakt om credits te vervangen door transacties.\
    Waar voorheen credits werden opgeslagen als eigenschap van de user.",
];

const item = manager.createItemFromProps(
    "Design fase",
    "De design keuze",
    null,
    null,
    paragraphs,
    TransactionClassImage,
    null,
);

export default item;
