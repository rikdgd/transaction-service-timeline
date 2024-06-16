import { Chrono } from 'react-chrono'
import './timeline.css';
import ItemManager from './items/itemManager';

import AnalyseIntro from './items/analyseFase/analyseIntro';



export default function TimeLine() {
    const items = [
        AnalyseIntro,
    ];
    
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
