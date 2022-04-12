import { data } from "../data/data";
import { Player } from "../models/Player";
import { Question } from "../models/Question";


class Controler {
    constructor( puntuacion ) {
        this.totalRound = 5;
        this.currentPlayer = new Player( puntuacion );
    }

    /**
     * 
     * @param {number} category the current category of questions
     * @returns a new question 
     */
    createRound( category ) {
        const current =  data.filter( question => question.category_level === category )[Math.floor(Math.random()*this.totalRound)]; 
        //console.log(current);           
        return new Question( current.question, current.options, current.answer, current.category_level );
    }
    /**
     * 
     * @param {number} score total accumulated
     */
    backingOut( score ){
        // const player = new Player();
        this.currentPlayer.setAccumulated( score );
    }

    gameOver(){
        this.currentPlayer.setAccumulated( 0 );
        alert( "Acumulaste: 0 Puntos");
    }
}
export { Controler }