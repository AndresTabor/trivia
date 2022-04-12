import React, { useEffect, useState } from 'react'
import { Controler } from '../controler/Controler';
import ScoreTable from './ScoreTable';


const Ui = () => {
    const [update, setUpdate] = useState( false );
    const [level, setLevel] = useState( 1 );
    const [score, setScore] = useState( 0 );
    const [currentQuestion, setcurrentQuestion] = useState( {
        options: []
    } )
    const room = new Controler( score );
    
    useEffect(() => {
        setcurrentQuestion(room.createRound( level ));      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [level, score])
    
    const attempt = ( index ) =>{

        if( currentQuestion.validation( index ) ) {  
            console.log("correcto");
            setLevel( level+1 );
            setScore( score+100 );
        }else{
            document.getElementById("overley").style.display="block";
            room.gameOver();
            setLevel( 1 );
            setScore( 0 );
            setUpdate( !update );
        }        
    }

    const backing = () => {
        room.backingOut( score );
        setUpdate( !update );
    }

  return (
    <>
        <div className='info-container'>
            <div className='round-info'>
                <span>Ronda: {level}</span>
            </div>
            <div className='score-info'>
                <span>Score: {score}</span>                
            </div>
            <div className='logo-tributo'>
                
            </div>
        </div>
        <div className='trivia-container'>
            <h2>{currentQuestion?.question}</h2>            
        </div>
        <div className='options-container'>
            {
                currentQuestion.options.map( (option, index) => (
                    <button key={index} 
                    onClick={() => attempt( index )}
                    className='btn-options'
                    >
                    {option}
                    </button>
                ))
            }
        </div>
        <div>
            <button className='btn-backingOut'
            onClick={() => backing( score )}
            >
            Retirarse
            </button>
        </div>
        <ScoreTable update={update}/>
    </>
  )
}

export default Ui