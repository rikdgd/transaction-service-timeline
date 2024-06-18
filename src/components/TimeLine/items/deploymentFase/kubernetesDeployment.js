import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "Het opzetten van een docker container is een goede stap, maar de container moet ook nog in een Kubernetes cluster \
    uitgerold worden. Hier moet ook rekening worden gehouden met de veiligheid.",
    "Zoals eerder genoemd word de connection string als environment variable meegegeven aan de docker container. \
    Het Kubernetes kluster moet ook toegang hebben tot deze secret, en dus is hiervoor een kubernetes secret aangemaakt. \
    In de secret wordt de connection string meegegeven, maar niet voor dat deze met base64 wordt ge-encode.",
];

const item = manager.createItemFromProps(
    null,
    "Kubernetes deployment",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
