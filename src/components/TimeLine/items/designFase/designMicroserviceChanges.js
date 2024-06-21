import ItemManager from "../itemManager";
import TransactionClassImage from '../../../../assets/transaction-class.png';




const manager = new ItemManager;

const paragraphs = [
    "In de figuur is zichtbaar hoe transactions er uitzien in de backend applicatie. Zoals zichtbaar zullen de id's van \
    zowel de ontvanger als de zender worden bijgehouden. Wanneer transaction data over het netwerk verstuurd wordt, zal deze \
    eerst worden verborgen door deze te encrypten.",
    "Ook is te zien dat een timestamp wordt bijgehouden, zo is altijd te zien wanneer de transaction was aangemaakt. Ook \
    kan op basis van deze timestamp worden bepaalde of de transaction nog geldig is."
];

const item = manager.createItemFromProps(
    "",
    "Transaction data",
    null,
    null,
    paragraphs,
    TransactionClassImage,
    null,
);

export default item;
