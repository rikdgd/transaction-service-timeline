import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Een van de non-functional requirements van Pong Online is als volgt:",
    "'At least 10.000.000 people can use the website at a time.'",
    "Mochten al deze gebruiker gelijktijdig hun balans opvragen, dan het systeem hier mee om moeten kunnen gaan.",
    "Het is wel belangrijk om op te merken dat 10.000.000 gebruikers simuleren in een load test enorm zwaar is werk is, \
    en daarom ook niet realistisch voor dit semester (ik heb geen super computer op zolder). \
    Ook kan zal een groot genoeg kluster opzetten niet gaan met de gegeven beperkingen."
];

const item = manager.createItemFromProps(
    null,
    "Omgang met hoge load",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
