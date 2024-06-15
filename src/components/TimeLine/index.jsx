import { Chrono } from 'react-chrono'
import './timeline.css';
import AnalyseComponent from './items/analyseFase/analyseComponent';



export default function TimeLine() {
    const items = getItems();
    
    return (
        <div className='timeline-container'>
            <Chrono 
                items={items} 
                mode="VERTICAL_ALTERNATING"
                theme={{
                    primary: '#88D498',
                    secondary: '#1A936F',
                    cardBgColor: 'white',
                    titleColor: '#C6DABF',
                    titleColorActive: '#F3E9D2',
                }}
            />
        </div>
    )
}

function getItems() {
    const testItem = createItem("Analyse fase", AnalyseComponent);
    
    
    return [
        testItem,
    ];
}


function createItem(title, itemContentComponent) {
    return {
        title: title,
        timelineContent: itemContentComponent()
    };
}