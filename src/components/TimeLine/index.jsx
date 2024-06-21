import { Chrono } from 'react-chrono'
import './timeline.css';

import AnalyseIntro from './items/analyseFase/analyseIntro';
import AnalyseConclusie from './items/analyseFase/analyseConclusie'
import AnalyseCreditRisicos from './items/analyseFase/analyseMisfunctions';
import AnalyseMisuseCases from './items/analyseFase/misuseCases';
import AnalyseAntiMisuseCases from './items/analyseFase/antiMisuseCases';

import DesignIntro from './items/designFase/designInto'
import DesignMicroservices from './items/designFase/designMicroserviceChanges';
import DesignC3Diagram from './items/designFase/designC3Diagram';
import MogelijkeAanpassingen from './items/designFase/mogelijkeAanpassingen';

import OntwikkelIntro from './items/ontwikkelFase/ontwikkelIntro';
import TransactionStruct from './items/ontwikkelFase/transacionStruct';
import TransactionDBEntry from './items/ontwikkelFase/transactionEntry';

import TestingIntro from './items/testFase/intro';
import UnitTesting from './items/testFase/unitTesting';
import EndToEndTesting from './items/testFase/endToEndTesting';
import PerformanceTesting from './items/testFase/performanceTesting';
import LocusttestResults from './items/testFase/locustTestResults';

import DeploymentIntro from './items/deploymentFase/intro';
import DockerContainer from './items/deploymentFase/dockerContainer';
import ConnectionString from './items/deploymentFase/connectionString';
import KubernetesDeployment from './items/deploymentFase/kubernetesDeployment';



export default function TimeLine() {
    const items = [
        AnalyseIntro,
        AnalyseConclusie,
        AnalyseCreditRisicos,
        AnalyseMisuseCases,
        AnalyseAntiMisuseCases,
        
        DesignIntro,
        DesignMicroservices,
        DesignC3Diagram,
        
        MogelijkeAanpassingen,
        OntwikkelIntro,
        TransactionStruct,
        TransactionDBEntry,
        
        TestingIntro,
        UnitTesting,
        EndToEndTesting,
        PerformanceTesting,
        LocusttestResults,
        
        DeploymentIntro,
        DockerContainer,
        ConnectionString,
        KubernetesDeployment,
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
