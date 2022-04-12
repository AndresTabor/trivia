import { data } from "../data/data";
import { Question } from "../models/Question";


class Controler {
    constructor() {
        this.totalRound = 5;
    }
    createRound( category ) {
        const current =  data.filter( question => question.category_level === category )[Math.floor(Math.random()*5)]; 
        //console.log(current);           
        return new Question( current.question, current.options, current.answer, current.category_level );
    }
}
export { Controler }