import whiteRook from '../assets/icons/whiteRook.png';
import blackRook from '../assets/icons/blackRook.png';
import { Colors } from '../types/Colors';
import { Piece } from './Piece';
import { Cord } from '../types/Cord';

export class Rook extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color === Colors.WHITE ? whiteRook : blackRook);
        this._cord = cord;
        this.color = color;
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
            this.moves = [];
            for (let k = 0; k < 8; k++) {
                this.moves.push([this._cord.i, k]);
                this.moves.push([k, this._cord.j]);
            }
        }
    }
}
