import * as React from 'react';
import { useEffect, useState } from 'react';

function Board() {

    const [board, setBoard] = useState<Array<Array<any>>>([[]]);

    useEffect(() => {
       let matrix: number[][] = [];
        for (let i = 0; i < 8; i++) {
  matrix[i] = [];
  for (let j = 0; j < 8; j++) {
    matrix[i][j] = 0;
  }
}
    },[])  

    return (<>
    
    </>);
}

export default Board;