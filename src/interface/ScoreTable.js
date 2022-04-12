import React, { useEffect, useState } from 'react'
import { scoreTable } from '../data/scoreTable'


const ScoreTable = ( update ) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log("montaje tabla");
        setData(scoreTable);
    }, [update])
    
    const closeTable = () => {
        document.getElementById("overley").style.display="none";
    }
  return (
    <div className='overley-container' id='overley'>
        <div className='table-container'>
            <button onClick={()=>closeTable()} className='btn-close'>
                Intentar de nuevo
            </button>
            <h2 className='mb-5 table-title'>Tabla de puntuación</h2>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>                
                </tr>
            </thead>
            <tbody>
                {
                    data.map((player, index) => (
                        <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                        </tr>                
                    ))
                }
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default ScoreTable