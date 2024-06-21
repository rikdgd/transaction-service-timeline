import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Er zijn duidelijk een aantal manieren waarop transacties gebruikt zouden kunnen worden voor malafide doeleinden. \
    Om dit te voorkomen zijn een aantal nieuwe non-functional requirements opgezet:",
    "- Alle verwijderde transacties worden gelogd met data zoals: transaction id, datum van verwijdering, verwijderd door gebruiker.",
    "- Enkel gebruikers met een admin rol kunnen transacties verwijderen.",
    "- Transacties kunnen niet worden aangepast, er kunnen enkel nieuwe worden aangemaakt.",
    "- Het bedrag van een transactie wordt geverifieerd voordat deze wordt goedgekeurd.",
    "- Gevoelige gebruikersgegevens in transacties zijn gehashed.",
    "- Transacties hebben een tijdslimiet en zijn enkel geldig gedurende deze periode."
];

const item = manager.createItemFromProps(
    null,
    "Misuse case preventie",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
