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
            const moves = [];

            moves.push([this._cord.i - 2, this._cord.j - 1]);
            moves.push([this._cord.i - 2, this._cord.j + 1]);
            moves.push([this._cord.i + 2, this._cord.j - 1]);
            moves.push([this._cord.i + 2, this._cord.j + 1]);
            moves.push([this._cord.i - 1, this._cord.j - 2]);
            moves.push([this._cord.i - 1, this._cord.j + 2]);
            moves.push([this._cord.i + 1, this._cord.j - 2]);
            moves.push([this._cord.i + 1, this._cord.j + 2]);

            this.moves = moves.filter((move) => {
                return (
                    move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
                );
            });
        }
    }
}
