import ItemManager from "../itemManager";
import TransactionStructImage from '../../../../assets/transaction-struct.png';



const manager = new ItemManager;

const paragraphs = [
    "De transaction service zal op zijn minst in staat moeten zijn om transacties aan te maken en op te halen.\
    Het aanpassen en verwijderen van transacties is een andere kwestie. Hier zijn we al eerder op ingedoken bij \
    'Analyse fase > Misuse case preventie'",
    
    "De mogelijkheid om transacties aan te passen of zelfs helemaal te verwijderen zou de transactie geschiedenis \
    onbetrouwbaar maken. Mocht er echt een transactie zijn die verwijderd/aangepast moet worden, dan kan dit probleem ook \
    worden opgelost door een nieuwe transactie aan te maken.",
    
    "Verder moet de transaction service ook in staat zijn een gebruiker zijn/haar huidige balans uit te rekenen aan \
    de hand van de transactie geschiedenis. Alleen dan kan verzekerd worden dat gebruikers geen credits kunnen uitgeven \
    die zij eigenlijk niet bezitten.",
    
    "Tot slot moet de transaction service alle verzoeken voor het maken van een nieuwe request controleren op de 'timestamp'. \
    Zo kan verzekerd worden dat het zelfde request verzoek niet meerdere malen verstuurd kan worden.",
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
