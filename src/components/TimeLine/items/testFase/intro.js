import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Transacties zijn best een belangrijk deel van de Pong Online applicatie, het spreekt daarom voor zich dat dit onderdeel \
    getest moet worden. Zo is gedurende het ontwikkelen van de software altijd duidelijk of transacties nog werken zoals verwacht.",
    "De vraag die overblijft: Wat is de beste manier om het transactie systeem te testen?",
];

const item = manager.createItemFromProps(
    "Testing fase",
    "Het testen van transacties",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
