import { Colors } from '../types/Colors';

export class Piece {
    image: string;
    color: Colors | undefined;
    moves: number[][] = [];
    _cord: { i: number; j: number } | undefined;

    constructor(image: string) {
        this.image = image;
    }
}
