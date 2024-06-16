class ItemManager {
    /**
     * Creates an item object with the given properties.
     *
     * @param {string} title - The title of the item.
     * @param {string} cardTitle - The title of the card.
     * @param {string} url - The URL associated with the item.
     * @param {string} cardSubtitle - The subtitle of the card.
     * @param {string} cardDetailedText - The detailed text of the card.
     * @param {string} imageUri - The URI of the image.
     * @param {HTMLElement} customContent - The custom HTML content to display. 
     * @return {Object} An object representing an item with the given properties.
     */
    createItemFromProps(
        title,
        cardTitle,
        url,
        cardSubtitle,
        cardDetailedText,
        imageUri,
        customContent,
    ) {
        let item = {
            title: title,
            cardTitle: cardTitle,
            cardDetailedText: cardDetailedText
        };
        
        if (url) item.url = url;
        if (cardSubtitle) item.cardSubtitle = cardSubtitle;
        
        if (imageUri) {
            item.media = {
                type: 'IMAGE',
                source: {
                    url: imageUri
                }
            }
        }
        
        if (customContent) item.timelineContent = customContent;
        
        return item;
    }
    
    /**
     * Creates an item object with the given title and itemContentComponent.
     * This allows to create fully custom items using a react component as body.
     *
     * @param {string} title - The title of the item.
     * @param {function} itemContentComponent - A function that returns the content of the item.
     * @return {Object} An object representing an item with the given title and content.
     */
    createItemFromComponent(title, itemContentComponent) {
        return {
            title: title,
            timelineContent: itemContentComponent()
        };
    }
}



export default ItemManager;
