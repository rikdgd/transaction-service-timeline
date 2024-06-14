import { Chrono } from 'react-chrono'
import './timeline.css';
import testItem from './items/testItem.json';
import analyseItem from './items/analyseFase/intro.json'



function TimeLine() {
  
    const items = [
        testItem,
        analyseItem
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
  
  
  
export default TimeLine;
