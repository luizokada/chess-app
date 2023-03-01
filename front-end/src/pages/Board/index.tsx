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
            resetMovementSquaresOnBoard();
            if (currentPiece.current === null || currentPiece === null) {
                const piece = board[i][j];
                currentPiece.current = piece;
                piece.moves.forEach((cord) => {
                    setBoard((prev) => {
                        const oldState = [...prev];
                        if (isCordenateValid(cord[0], cord[1])) {
                            oldState[cord[0]][cord[1]].isMovement = true;
                        }
                        return oldState;
                    });
                });
            } else if (board[i][j].isMovement) {
                const piece = currentPiece.current;
                const pieceConstructor = piece.constructor as any;
                setBoard((prev) => {
                    if (piece._cord) {
                        const oldState = [...prev];

                        oldState[i][j] = new pieceConstructor(piece.color, {
                            i,
                            j,
                        });
                        oldState[piece?._cord.i][piece?._cord.j] = new Piece(
                            '',
                        );

                        return oldState;
                    }
                    return prev;
                });
                currentPiece.current = null;
            } else {
                currentPiece.current = null;
            }
        },
        [board, setBoard],
    );

    useEffect(() => {
        console.log(board);
    }, [board]);

    return (
        <Container>
            {board.map((row, i) => {
                return row.map((square, j) => {
                    return (
                        <Square
                            onClick={() => {
                                handleMovement(i, j);
                                if (square.image === '') {
                                    currentPiece.current = null;
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
