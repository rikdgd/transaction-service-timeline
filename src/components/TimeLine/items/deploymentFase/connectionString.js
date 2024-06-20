import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "De backend applicatie van de transaction service heeft een connection string nodig om met de database te kunnen \
    communiceren. De applicatie ontvangt deze connection string via een environment variable.",
    "Deze connection string moet uiteraard geheim blijven en kan dus niet hardcoded meegegeven worden via de dockerfile. \
    De keuze is gemaakt om simpelweg de connection string handmatig mee te geven aan de container, wanneer hij gerunt wordt. \
    Dit is niet de makkelijkste manier voor ontwikkelaars om dit aan te pakken, maar wel een van de veiligste.",
];

const item = manager.createItemFromProps(
    null,
    "Omgaan met secrets",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
