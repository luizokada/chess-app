import * as React from 'react';
import { useEffect, useState } from 'react';
import { BlackSquare, Container, MovementDot, WhiteSquare } from './styles';
import { Piece } from '../../utils/Piece';
import { initBoart } from '../../utils/InitBoard';

const Board: React.FC = () => {
    const [board, setBoard] = useState<Array<Array<Piece>>>([[]]);
    useEffect(() => {
        setBoard(initBoart());
    }, []);

    const handleMovement = React.useCallback(
        (i: number, j: number) => {
            const piece = board[i][j];
            piece.moves.forEach((cord) => {
                setBoard((prev) => {
                    const oldState = [...prev];
                    oldState[cord[0]][cord[1]].isMovement = true;
                    return oldState;
                });
            });
        },
        [board],
    );

    return (
        <Container>
            {board.map((row, i) => {
                return row.map((square, j) => {
                    if (i % 2 !== 0) {
                        return j % 2 === 0 ? (
                            <BlackSquare key={j} image={square.image}>
                                {square.isMovement && (
                                    <MovementDot></MovementDot>
                                )}
                            </BlackSquare>
                        ) : (
                            <WhiteSquare key={j} image={square.image}>
                                {square.isMovement && (
                                    <MovementDot></MovementDot>
                                )}
                            </WhiteSquare>
                        );
                    } else {
                        return j % 2 === 0 ? (
                            <WhiteSquare key={j} image={square.image}>
                                {square.isMovement && (
                                    <MovementDot></MovementDot>
                                )}
                            </WhiteSquare>
                        ) : (
                            <BlackSquare key={j} image={square.image}>
                                {square.isMovement && (
                                    <MovementDot></MovementDot>
                                )}
                            </BlackSquare>
                        );
                    }
                });
            })}
        </Container>
    );
};

export default Board;
