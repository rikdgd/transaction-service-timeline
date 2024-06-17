import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Een van de non-functional requirements van Pong Online is als volgt:",
    "'At least 10.000.000 people can use the website at a time.'",
    "Mochten al deze gebruiker gelijktijdig hun balans opvragen, dan moet het systeem hier mee om moeten kunnen gaan.",
    "Het is wel belangrijk om op te merken dat 10.000.000 gebruikers simuleren in een load test enorm zwaar is werk is, \
    en daarom ook niet realistisch voor dit semester. Hier is geen gratis/goedkope cloud oplossing voor gevonden.",
    "Ook zal het opgezette Kubernetes kluster tijdens het testen nooit zo hoog schalen als in productie. Dit zou anders \
    een heel duur grapje worden.",
    "Toch kan het wel helpen om te zien of er performance issues zijn op deze functionaliteit. Het uitrekenen van \
    een gebruiker's balans is een grote taak wanneer er mogelijk meerdere milljoenen transacties zijn."
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
