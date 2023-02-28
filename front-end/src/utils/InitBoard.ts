import { Colors } from '../types/Colors';
import { Bishop } from './Bishop';
import { King } from './King';
import { Knight } from './Knight';
import { Pawn } from './Panw';
import { Piece } from './Piece';
import { Queen } from './Queen';
import { Rook } from './Rook';

export const initBoart = (): Piece[][] => {
    let matrix: Piece[][] = [];
    for (let i = 0; i < 8; i++) {
        matrix[i] = [
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
            {
                image: '',
                color: undefined,
                moves: [],
                isMovement: false,
                _cord: undefined,
            },
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
                            {
                                i,
                                j: 7 - j,
                            },
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
                            {
                                i,
                                j: 7 - j,
                            },
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
    return matrix;
};
