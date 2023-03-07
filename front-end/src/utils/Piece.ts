import { Colors } from '../types/Colors';
import { Pieces } from '../types/Pieces';

export class Piece {
    image: string;
    color: Colors | undefined;
    moves: number[][] = [];
    type: Pieces | undefined;
    isMovement: boolean = false;
    _cord: { i: number; j: number } | undefined;

    constructor(image: string) {
        this.image = image;
    }

    set i(i: number) {
        return;
    }

    set j(j: number) {
        return;
    }
}
