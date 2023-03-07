import { Colors } from '../types/Colors';
import { Piece } from './Piece';
import whiteBishop from '../assets/icons/whiteBishop.png';
import blackBishop from '../assets/icons/blackBishop.png';
import { Cord } from '../types/Cord';
import { isCordenateValid } from './BoardFunctions';
import { Pieces } from '../types/Pieces';

export class Bishop extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color === Colors.WHITE ? whiteBishop : blackBishop);
        this.color = color;
        this._cord = cord;
        this.type = Pieces.BISHOP;
        this.calcMovement();
    }

    public set i(i: number) {
        if (this._cord !== undefined) {
            this._cord.i = i;
            this.calcMovement();
        }
    }

    public set j(j: number) {
        if (this._cord !== undefined) {
            this._cord.j = j;
            this.calcMovement();
        }
    }

    private calcMovement() {
        if (this._cord !== undefined) {
            const moves = [];
            for (let k = 1; k < 8; k++) {
                moves.push([this._cord.i + k, this._cord.j + k]);
                moves.push([this._cord.i - k, this._cord.j - k]);
                moves.push([this._cord.i + k, this._cord.j - k]);
                moves.push([this._cord.i - k, this._cord.j + k]);
            }
            this.moves = moves.filter((move) => {
                return (
                    move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
                );
            });
        }
    }
}
