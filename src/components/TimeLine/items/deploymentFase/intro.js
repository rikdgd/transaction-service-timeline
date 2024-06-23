import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "De laatste stap om transacties te verwerken in de Pong Online applicatie is het uitrollen van de transaction service. \
    Dit moet op de juiste manier gedaan worden om te voorkomen dat zwakheden in de applicatie worden geïntroduceerd.",
];

const item = manager.createItemFromProps(
    "Deployment fase",
    "Het uitrollen van transactions",
    null,
    null,
    paragraphs,
    null,
    null
);

export default item;
