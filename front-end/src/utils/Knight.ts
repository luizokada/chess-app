import { Colors } from '../types/Colors';
import { Piece } from './Piece';
import whiteKnight from '../assets/icons/whiteKnight.png';
import blackKnight from '../assets/icons/blackKnight.png';
import { Cord } from '../types/Cord';

export class Knight extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color === Colors.WHITE ? whiteKnight : blackKnight);
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
        if (this._cord! !== undefined) {
            this.moves = [];
            this.moves.push([this._cord.i - 2, this._cord.j - 1]);
            this.moves.push([this._cord.i - 2, this._cord.j + 1]);
            this.moves.push([this._cord.i + 2, this._cord.j - 1]);
            this.moves.push([this._cord.i + 2, this._cord.j + 1]);
            this.moves.push([this._cord.i - 1, this._cord.j - 2]);
            this.moves.push([this._cord.i - 1, this._cord.j + 2]);
            this.moves.push([this._cord.i + 1, this._cord.j - 2]);
            this.moves.push([this._cord.i + 1, this._cord.j + 2]);
        }
    }
}
