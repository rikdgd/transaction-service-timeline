import ItemManager from "../itemManager";
import DockerVulns from '../../../../assets/docker-vulns.png';



const manager = new ItemManager;

const paragraphs = [
    "De Pong Online applicatie gaat in een Kubernetes kluster uitgerold worden. Hiervoor moet de applicatie eerst in een \
    container gedeployed worden. Om dit voor elkaar te krijgen is Docker gebruikt. Docker is een zeer populaire \
    container runtime, toch kan docker vaak voor applicatie zwakheden zorgen.",
    "De container waarin de Pong Online applicatie is uitgerold heeft ook een paar zwakheden, deze zijn te zien in de \
    bijgevoegde afbeelding.",
    "De vulnerabilities die worden aangegeven zijn niet van de transaction service, of zijn dependecies, afkomstig. \
    Ze komen van de gebruikte image 'debian:trixie-slim' af, deze bevat een aantal packages met vulnerabilities.",
    "De vulnerabilities vallen echter allemaal binnen de non-functional requirements van Pong Online, ze hebben namelijk \
    geen van alle een CVE score van 4 of hoger."
];

const item = manager.createItemFromProps(
    null,
    "Docker container",
    null,
    null,
    paragraphs,
    DockerVulns,
    null,
);

export default item;
