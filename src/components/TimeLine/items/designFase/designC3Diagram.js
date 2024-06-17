import ItemManager from "../itemManager";
import c3Diagram from '../../../../assets/C3.png';



const manager = new ItemManager;


const item = manager.createItemFromProps(
    null,
    "C3 diagram met de transaction service toegevoegd",
    null,
    null,
    null,
    c3Diagram,
    null,
);



export default item;
