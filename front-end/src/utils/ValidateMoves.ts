import { Colors } from '../types/Colors';
import { Cord } from '../types/Cord';
import { Piece } from './Piece';

export class ValidateMoves {
    constructor() {
        return;
    }
    public validatePawnMoves(destiny: Cord, board: Piece[][], piece: Piece) {
        const { color } = piece;
        const { i, j } = destiny;
        const { i: iPiece, j: jPiece } = piece._cord as Cord;
        if (Math.abs(i - iPiece) === 2) {
            if (color === Colors.WHITE) {
                if (
                    board[iPiece + 1][jPiece].image !== '' ||
                    board[i][j].image !== ''
                ) {
                    return false;
                }
            } else {
                if (
                    board[iPiece - 1][jPiece].image !== '' ||
                    board[i][j].image !== ''
                ) {
                    return false;
                }
            }
            return true;
        } else {
            return board[i][j].image === '';
        }
    }

    public validateRookMoves(destiny: Cord, board: Piece[][], piece: Piece) {}

    public validateKnightMoves(destiny: Cord, board: Piece[][], piece: Piece) {
        if (
            board[destiny.i][destiny.j].image === '' ||
            piece.color !== board[destiny.i][destiny.j].color
        ) {
            return true;
        }
        return false;
    }
}
