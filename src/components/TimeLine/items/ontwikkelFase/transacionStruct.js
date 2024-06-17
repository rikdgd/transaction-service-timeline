import ItemManager from "../itemManager";
import TransactionStructImage from '../../../../assets/transaction-struct.png';



const manager = new ItemManager;

const paragraphs = [
    "De transaction service zal op zijn minst in staat moeten zijn om transacties aan te maken en op te halen.\
    Het aanpassen en verwijderen van transacties is een andere kwestie.",
    "De mogelijkheid om transacties aan te passen of zelfs helemaal te verwijderen zou de transactie geschiedenis \
    onbetrouwbaar maken. Mocht er echt een transactie zijn die verwijderd/aangepast moet worden, dan kan dit probleem ook \
    worden opgelost door een nieuwe transactie aan te maken.",
    "Tot slot moet de transaction service ook in staat zijn een gebruiker zijn/haar huidige balans uit te rekenen aan \
    de hand van de transactie geschiedenis."
];

const item = manager.createItemFromProps(
    null, 
    "Transactions in the Rust backend.", 
    "https://github.com/rikdgd/Pong-transaction-service", 
    null, 
    paragraphs, 
    TransactionStructImage, 
    null
);

export default item;
