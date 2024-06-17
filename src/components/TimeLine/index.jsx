import { Chrono } from 'react-chrono'
import './timeline.css';

import AnalyseIntro from './items/analyseFase/analyseIntro';
import AnalyseConclusie from './items/analyseFase/analyseConclusie'

import DesignIntro from './items/designFase/designInto'
import DesignMicroservices from './items/designFase/designMicroserviceChanges';
import DesignC3Diagram from './items/designFase/designC3Diagram';
import MogelijkeAanpassingen from './items/designFase/mogelijkeAanpassingen';

import OntwikkelIntro from './items/ontwikkelFase/ontwikkelIntro';
import TransactionStruct from './items/ontwikkelFase/transacionStruct';
import TransactionDBEntry from './items/ontwikkelFase/transactionEntry';



export default function TimeLine() {
    const items = [
        AnalyseIntro,
        AnalyseConclusie,
        DesignIntro,
        DesignMicroservices,
        DesignC3Diagram,
        MogelijkeAanpassingen,
        OntwikkelIntro,
        TransactionStruct,
        TransactionDBEntry,
    ];
    
    return (
        <div className='timeline-container'>
            <Chrono 
                items={items} 
                mode="VERTICAL_ALTERNATING"
                mediaSettings={{ align: 'right', fit: 'contain' }}
                // mediaHeight={400}
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
