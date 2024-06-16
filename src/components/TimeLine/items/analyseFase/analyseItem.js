import ItemManager from "../itemManager";


const manager = new ItemManager;



const cardParagraphs = [
    "'Pong Online' is een online game waar spelers over de hele wereld tegen elkaar de klassieke game 'pong' kunnen spelen.\
    Om geld te kunnen verdienen zal Pong Online in-game aankopen bevatten in de vorm van credits. De gebruiker kan credits kopen \
    om vervolgens van deze credits bepaalde perks en gimmicks aan te schaffen.",
    
    "h",
];



const item = manager.createItemFromProps(
    "Analyse fase",
    "Het probleem met credits.",
    null,
    null,
    cardParagraphs,
    null,
);



export default item;
