import ItemManager from "../itemManager";
import LocustTestResults from '../../../../assets/locust-results-charts.png';



const manager = new ItemManager;

const paragraphs = [
    "De bovenstaande grafieken zijn de resultaten van de load test op het REST API endpoint 'getUserBalance' van de \
    transaction service. In de bovenste grafiek geeft groen het totaal aantal requests per seconde aan, en rood \
    het aantal gefaalde requests. De onderste grafiek geeft de response time aan, geel voor het gemiddelde, en paarse voor \
    de hoogste 5%.)",
    "De test is uitgevoerd met 1000 gelijktijdige gebruikers. Dit maakt al snel duidelijk dat er iets niet klopt wanneer we \
    kijken naar de bovenste grafiek (aantal requests). ",
    "Het probleem zit hem in de gebruikte database, deze wordt namelijk in de cloud gehost op MongoDB Atlas. Hiervoor \
    wordt een 'free tier' gebruikt en deze kan maar een handje vol aan gelijktijdige gebruikers aan."
];

const item = manager.createItemFromProps(
    null,
    "Resultaten loadtest",
    null,
    null,
    paragraphs,
    LocustTestResults,
    null,
);

export default item;
