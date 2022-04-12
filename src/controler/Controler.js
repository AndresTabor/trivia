import { data } from "../data/data";
import { scoreTable } from "../data/scoreTable";
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
        this.currentPlayer.setAccumulated( score );
        const newRegister = {
            id: scoreTable.length + 1,
            name: "player" + (scoreTable.length +1),
            score: this.currentPlayer.accumulated
        }
        scoreTable.push(newRegister);
        document.getElementById("overley").style.display="block";
    }

    /**
     * 
     * @param {number} score total accumulated
     */
    finishTrivia( score ){
        this.currentPlayer = new Player( score );
        this.currentPlayer.setAccumulated( score );
        const newRegister = {
            id: scoreTable.length + 1,
            name: "player" + (scoreTable.length +1),
            score: this.currentPlayer.accumulated
        }
        scoreTable.push(newRegister);
        document.getElementById("overley").style.display="block";
    }

     
    gameOver(){
        this.currentPlayer.setAccumulated( 0 );
        const newRegister = {
            id: scoreTable.length + 1,
            name: "player" + (scoreTable.length +1),
            score: this.currentPlayer.accumulated
        }
        scoreTable.push(newRegister);
    }
}
export { Controler }