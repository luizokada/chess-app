import * as React from 'react';
import { useEffect, useState } from 'react';
import { BlackSquare, Container, WhiteSquare } from './styles';
import { Piece } from '../../utils/Piece';
import { Pawn } from '../../utils/Panw';
import { Knight } from '../../utils/Knight';
import { Bishop } from '../../utils/Bishop';
import { Queen } from '../../utils/Queen';
import { King } from '../../utils/King';
import { Rook } from '../../utils/Rook';

import { Colors } from '../../types/Colors';

interface SquareType {
    image: string;
    type: string;
    color: string;
}

const validadeteSqueres = (
    piece: string,
    i: number,
    j: number,
    color: string,
) => {
    switch (piece) {
        case 'pawn':
            break;
        case 'knight':
            break;
        case 'rook':
            break;
        case 'bishop':
            break;
        case 'queen':
            break;
        case 'king':
            break;
        default:
            break;
    }
};
const Board: React.FC = () => {
    const [board, setBoard] = useState<Array<Array<Piece>>>([[]]);
    useEffect(() => {
        let matrix: Piece[][] = [];
        for (let i = 0; i < 8; i++) {
            matrix[i] = [
                { image: '', color: undefined, moves: [], _cord: undefined },
                { image: '', color: undefined, moves: [], _cord: undefined },
                { image: '', color: undefined, moves: [], _cord: undefined },
                { image: '', color: undefined, moves: [], _cord: undefined },
                { image: '', color: undefined, moves: [], _cord: undefined },
                { image: '', color: undefined, moves: [], _cord: undefined },
                { image: '', color: undefined, moves: [], _cord: undefined },
                { image: '', color: undefined, moves: [], _cord: undefined },
            ];
            for (let j = 0; j < 8; j++) {
                if (i === 0 || i === 7) {
                    switch (j) {
                        case 0:
                            matrix[i][j] = new Rook(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                {
                                    i,
                                    j,
                                },
                            );
                            matrix[i][7 - j] = new Rook(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                {
                                    i,
                                    j: 7 - j,
                                },
                            );

                            break;
                        case 1:
                            matrix[i][j] = new Knight(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                {
                                    i,
                                    j,
                                },
                            );
                            matrix[i][7 - j] = new Knight(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                { i, j: 7 - j },
                            );

                            break;

                        case 2:
                            matrix[i][j] = new Bishop(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                {
                                    i,
                                    j,
                                },
                            );
                            matrix[i][7 - j] = new Bishop(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                { i, j: 7 - j },
                            );

                            break;

                        case 3:
                            matrix[i][j] = new Queen(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                {
                                    i,
                                    j,
                                },
                            );

                            break;

                        case 4:
                            matrix[i][j] = new King(
                                i === 0 ? Colors.WHITE : Colors.BLACK,
                                {
                                    i,
                                    j,
                                },
                            );

                            break;

                        default:
                            break;
                    }
                } else if (i === 1) {
                    matrix[i][j] = new Pawn(Colors.WHITE, { i, j });
                } else if (i === 6) {
                    matrix[i][j] = new Pawn(Colors.BLACK, { i, j });
                } else {
                    matrix[i][j]['image'] = '';
                }
            }
        }
        console.log(matrix);
        setBoard(matrix);
    }, []);

    return (
        <Container>
            {board.map((row, i) => {
                return row.map((square, j) => {
                    if (i % 2 !== 0) {
                        return j % 2 === 0 ? (
                            <BlackSquare
                                key={j}
                                image={square.image}
                            ></BlackSquare>
                        ) : (
                            <WhiteSquare
                                key={j}
                                image={square.image}
                            ></WhiteSquare>
                        );
                    } else {
                        return j % 2 === 0 ? (
                            <WhiteSquare
                                key={j}
                                image={square.image}
                            ></WhiteSquare>
                        ) : (
                            <BlackSquare
                                key={j}
                                image={square.image}
                            ></BlackSquare>
                        );
                    }
                });
            })}
        </Container>
    );
};

export default Board;
