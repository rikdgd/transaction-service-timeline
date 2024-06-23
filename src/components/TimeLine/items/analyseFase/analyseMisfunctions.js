import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Een standaard credits systeem heeft zijn voordelen, maar er zijn een aantal dingen die malafide actoren zouden kunnen doen \
    die voor problemen zorgen bij een credit systeem.",
    "Malafide actoren zouden hun credit score kunnen aanpassen, zonder dat dit automatisch te detecteren is. Wanneer een \
    malafide actor zijn/haar credits verhoogd, is er geen informatie beschikbaar over de manier en locatie waar de credits \
    vandaan komen.",
    "Ook is het probleem van fraude iets groter bij credits. Mocht een gebruiker bijvoorbeel credits verliezen door phishing, \
    dan is het moeilijk om dit probleem goed op te lossen. Terwijl wanneer transacties worden gebruikt, de transactie \
    simpelweg verwijderd kan worden om beide gebruikers weer de juiste hoeveelheid credits te geven."
];

const item = manager.createItemFromProps(
    null,
    "Risico's van credits",
    null,
    null,
    paragraphs,
    null,
    null,
);



export default item;
