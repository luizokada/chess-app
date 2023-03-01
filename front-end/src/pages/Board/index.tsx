import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
    Bar,
    Circle,
    Container,
    MovementDot,
    ProhibitionSign,
    Square,
} from './styles';
import { Piece } from '../../utils/Piece';
import {
    getSquareColor,
    initBoard,
    isCordenateValid,
} from '../../utils/BoardFunctions';

const Board: React.FC = () => {
    const [board, setBoard] = useState<Array<Array<Piece>>>([[]]);
    const currentPiece = useRef<Piece | null>(null);

    useEffect(() => {
        setBoard(initBoard());
    }, []);

    const resetMovementSquaresOnBoard = useCallback(() => {
        setBoard((prev) => {
            const oldState = [...prev];
            oldState.forEach((row) => {
                row.forEach((square) => {
                    square.isMovement = false;
                });
            });
            return oldState;
        });
    }, [board, setBoard]);

    const handleMovement = useCallback(
        (i: number, j: number) => {
            const piece = board[i][j];
            currentPiece.current = piece;
            console.log(piece);
            piece.moves.forEach((cord) => {
                setBoard((prev) => {
                    const oldState = [...prev];
                    if (isCordenateValid(cord[0], cord[1])) {
                        oldState[cord[0]][cord[1]].isMovement = true;
                    }
                    return oldState;
                });
            });
        },
        [board, setBoard],
    );

    return (
        <Container>
            {board.map((row, i) => {
                return row.map((square, j) => {
                    return (
                        <Square
                            onClick={() => {
                                resetMovementSquaresOnBoard();
                                if (square.image !== '') {
                                    handleMovement(i, j);
                                }
                            }}
                            image={square.image}
                            key={j}
                            background={getSquareColor(i, j)}
                        >
                            {square.isMovement &&
                                (square.image === '' ? (
                                    <MovementDot></MovementDot>
                                ) : square.color ===
                                  currentPiece.current?.color ? (
                                    <ProhibitionSign>
                                        <Circle>
                                            <Bar />
                                        </Circle>
                                    </ProhibitionSign>
                                ) : (
                                    <MovementDot></MovementDot>
                                ))}
                        </Square>
                    );
                });
            })}
        </Container>
    );
};

export default Board;
