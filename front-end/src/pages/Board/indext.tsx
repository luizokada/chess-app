import * as React from 'react';
import { useEffect, useState } from 'react';
import { BlackSquare, Container, WhiteSquare } from './styles';

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
        setBoard(matrix);
    }, []);

    return (
        <Container>
            {board.map((row, i) => {
                return (
                    <div>
                        {row.map((col, j) => {
                            if (i % 2 === 0) {
                                return j % 2 === 0 ? (
                                    <BlackSquare></BlackSquare>
                                ) : (
                                    <WhiteSquare></WhiteSquare>
                                );
                            } else {
                                return j % 2 === 0 ? (
                                    <WhiteSquare></WhiteSquare>
                                ) : (
                                    <BlackSquare></BlackSquare>
                                );
                            }
                        })}
                    </div>
                );
            })}
        </Container>
    );
}

export default Board;
