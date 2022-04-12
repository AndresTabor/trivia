class Question {
    /**
     *
     * @param {string} question the text of the question
     * @param {string[]} options the different answer options
     * @param {string} answer the correct answer
     * @param {int} level the category level
     */
    constructor(question, options, answer, level) {
      this.question = question;
      this.options = options;
      this.answer = answer;
      this.category_level = level;
      
    }
    /**
       *
       * @param {string} option the option selected
       * @returns {boolean} returns if the option is correct
       */
     validation(option) {
       console.log(option === this.answer);
      //return option === this.answer;
    }
  
}
  
export { Question };
  