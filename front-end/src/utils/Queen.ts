import { Colors } from '../types/Colors';
import { Piece } from './Piece';
import whiteQueen from '../assets/icons/whiteQueen.png';
import blackQueen from '../assets/icons/blackQueen.png';
import { Cord } from '../types/Cord';
import { Pieces } from '../types/Pieces';

export class Queen extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color === Colors.WHITE ? whiteQueen : blackQueen);
        this.color = color;
        this._cord = cord;
        this.type = Pieces.QUEEN;
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
            for (let k = 0; k < 8; k++) {
                if (k !== this._cord.j) {
                    moves.push([this._cord.i, k]);
                }
                if (k !== this._cord.i) {
                    moves.push([k, this._cord.j]);
                }
            }
            this.moves = moves.filter((move) => {
                return (
                    move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
                );
            });
        }
    }
}
