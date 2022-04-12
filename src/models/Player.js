class Player {
    /**
     * 
     * @param {number} acumulado total accumulated
     */
    constructor( acumulado ) {
        this.accumulated = acumulado; 
    }

    setAccumulated() {
        alert( "Acumulaste: " + this.accumulated +  " Puntos");
    }
}

export { Player };