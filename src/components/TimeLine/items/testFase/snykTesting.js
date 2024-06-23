import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Om de Pong Online applicatie te controlleren op vulnerabilities wordt Snyk gebruikt. Snyk heeft alleen een nadeel: \
    het is niet in staat Rust code te controleren.",
    "Voor de transaction service is nog geen alternatief gevonden op Snyk. Hier zou verder onderzoek naar moeten worden \
    uitgevoerd om te achterhalen of het momenteel mogelijk is om Rust code op vulnerabilities te testen.",
];

const item = manager.createItemFromProps(
    null, 
    "Security testing",
    "https://snyk.io/",
    null,
    paragraphs,
    null,
    null,
);

export default item;
