import { Colors } from '../types/Colors';
import { Cord } from '../types/Cord';
import { Piece } from './Piece';
import whiteKing from '../assets/icons/whiteKing.png';
import blackKing from '../assets/icons/blackKing.png';

export class King extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color === Colors.WHITE ? whiteKing : blackKing);
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

            this.moves.push([this._cord.i + 1, this._cord.j + 1]);
            this.moves.push([this._cord.i + 1, this._cord.j - 1]);
            this.moves.push([this._cord.i - 1, this._cord.j - 1]);
            this.moves.push([this._cord.i - 1, this._cord.j + 1]);
            this.moves.push([this._cord.i, this._cord.j - 1]);
            this.moves.push([this._cord.i, this._cord.j + 1]);
            this.moves.push([this._cord.i - 1, this._cord.j]);
            this.moves.push([this._cord.i + 1, this._cord.j]);
        }
    }
}
