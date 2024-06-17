import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Aan de hand van de gemaakte designs kan een implementatie van de transactie service worden ontwikkeld.",
    "Er is voor de transaction microservice gekozen om de Rust programmeer taal te gebruiken vanwegen de performance en security.\
    Twee aspecten die belangrijk zijn voor het bijhouden van transacties.",
];

const item = manager.createItemFromProps(
    'Ontwikkel fase',
    'Het ontwikkelen van transacties',
    null,
    null,
    paragraphs,
    null,
    null
);

export default item;
