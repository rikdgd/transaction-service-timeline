import ItemManager from "../itemManager";



const manager = new ItemManager;

const paragraphs = [
    "De huidige structuur van transacties werkt maar is redelijk minimaal, dit is met opzet zo gelaten \
    wegens de beschikbare tijd. Er zijn wel een aantal toevoegingen die in de toekomst van pas kunnen komen.",
    "Zo zouden transacties ook bij kunnen houden welk type 'currency' het betreft. Momenteel wordt namelijk enkel de \
    transactie geschiedenis van de standaard credits bijgehouden. Het zou ook een goed idee zijn om transacties te implementeren \
    voor de aankopen die direct met 'echt' geld worden uitgevoerd.",
    "Verder zouden ook data zoals 'ip-address', 'user-agent/source' en 'metadata' bijgehouden kunnen worden om het nog \
    makkelijker te maken om te achterhalen waar verdachte transacties vandaan komen en deze gebruikers te blokkeren. \
    Hierbij is het wel heel belangrijk om deze data te anonimiseren om binnen de regels van GDPR te blijven.",
];

const item = manager.createItemFromProps(
    null,
    "Mogelijke aanpassingen",
    null,
    null,
    paragraphs,
    null,
    null,
);

export default item;
