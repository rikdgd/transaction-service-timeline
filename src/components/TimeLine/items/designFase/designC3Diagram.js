import ItemManager from "../itemManager";
import c3Diagram from '../../../../assets/C3.png';



const manager = new ItemManager;


const item = manager.createItemFromProps(
    null,
    "C3 diagram met de transaction service toegevoegd",
    null,
    null,
    "Om de security van de transaction service (en alle andere services) te waarborgen wordt deze achter een API Gateway \
    gezet. In de gateway kunnen requests gecontrolleeerd worden voordat ze worden doorverwezen naar de juiste service.",
    c3Diagram,
    null,
);



export default item;
