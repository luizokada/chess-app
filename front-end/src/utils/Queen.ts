import { Colors } from '../types/Colors';
import { Piece } from './Piece';
import whiteQueen from '../assets/icons/whiteQueen.png';
import blackQueen from '../assets/icons/blackQueen.png';
import { Cord } from '../types/Cord';

export class Queen extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color);
        this._cord = cord;
        this.image = color === Colors.WHITE ? whiteQueen : blackQueen;
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
            for (let k = 0; k < 8; k++) {
                this.moves.push([this._cord.i + k, this._cord.j + k]);
                this.moves.push([this._cord.i - k, this._cord.j - k]);
                this.moves.push([this._cord.i + k, this._cord.j - k]);
                this.moves.push([this._cord.i - k, this._cord.j + k]);
            }
        }
    }
}
