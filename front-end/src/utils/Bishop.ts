import { Colors } from '../types/Colors';
import { Piece } from './Piece';
import whiteBishop from '../assets/icons/whiteBishop.png';
import blackBishop from '../assets/icons/blackBishop.png';
import { Cord } from '../types/Cord';

export class Bishop extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color === Colors.WHITE ? whiteBishop : blackBishop);
        this.color = color;
        this._cord = cord;
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
                this.moves.push([this._cord.i + k, this._cord.j + k]);
                this.moves.push([this._cord.i - k, this._cord.j - k]);
                this.moves.push([this._cord.i + k, this._cord.j - k]);
                this.moves.push([this._cord.i - k, this._cord.j + k]);
            }
        }
    }
}
