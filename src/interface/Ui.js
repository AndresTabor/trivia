import React, { useEffect, useState } from 'react'
import { Controler } from '../controler/Controler';

const Ui = () => {
    const [level, setLevel] = useState( 1 );
    const [currentQuestion, setcurrentQuestion] = useState( {
        options: []
    } )
    
    useEffect(() => {
        console.log("montaje");
        const name = new Controler();
        setcurrentQuestion(name.createRound( level ));      
    }, [level])
    


  return (
    <div>
        <h2>{currentQuestion?.question}</h2>
        {
            currentQuestion.options.map( (option, index) => (
                <button key={index} onClick={() => currentQuestion.validation( index )}>{option}</button>
            ))
        }
    </div>
  )
}

export default Ui