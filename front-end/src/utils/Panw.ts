import { Piece } from './Piece';
import whitePawn from '../assets/icons/whitePanw.png';
import blackPawn from '../assets/icons/blackPanw.png';
import { Colors } from '../types/Colors';
import { Cord } from '../types/Cord';
import { Pieces } from '../types/Pieces';

export class Pawn extends Piece {
    constructor(color: Colors, cord: Cord) {
        super(color === Colors.WHITE ? whitePawn : blackPawn);
        this.color = color;
        this._cord = cord;
        this.type = Pieces.PAWN;
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
            let move = this.color === Colors.WHITE ? 1 : -1;
            moves.push([this._cord.i + move, this._cord.j]);
            if (this._cord.i === 6 || this._cord.i === 1) {
                moves.push([this._cord.i + move * 2, this._cord.j]);
            }
            this.moves = moves.filter((move) => {
                return (
                    move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
                );
            });
        }
    }
}
