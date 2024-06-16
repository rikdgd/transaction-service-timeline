import { Chrono } from 'react-chrono'
import './timeline.css';
import ItemManager from './items/itemManager';

import AnalyseIntro from './items/analyseFase/analyseIntro';
import AnalyseConclusie from './items/analyseFase/analyseConclusie'
import DesignIntro from './items/designFase/designInto'



export default function TimeLine() {
    const items = [
        AnalyseIntro,
        AnalyseConclusie,
        DesignIntro,
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
