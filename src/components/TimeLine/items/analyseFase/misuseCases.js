import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Om vast te leggen hoe transactions gebruikt kunnen worden voor slechte doeleinden, zijn een aantal \
    misuse cases opgezet:",
    "- De gebruiker kan een transactie verwijderen om een betaling ongedaan te maken.",
    "- De gebruiker kan de ontvanger/afzender van een transactie aanpassen in zijn voordeel.",
    "- De gebruiker kan de 'credit' waarde van een transactie aanpassen om iets voor minder dan de originele prijs te kopen.",
    "- De gebruiker kan gevoelige gebruikersgegevens in de netwerkverzoeken bekijken vanwege onjuiste versleuteling/hashing/toegangscontrole.",
    "- De gebruiker kan een http(s)-request van een geldige transactie vastleggen om die transactie opnieuw uit te voeren."

];

const item = manager.createItemFromProps(
    null,
    "Misuse cases",
    null,
    "Er is nagedacht over de voordelen van een transaction service, maar het is ook een slim plan om vanuit de hoek van \
    een malafide actor te kijken. Hoe zouden zij de transaction service kunnen benaderen om hier onbedoelde voordelen \
    uit te halen?",
    paragraphs,
    null,
    null,
);

export default item;
