import {DocumentInterface} from "./document.interface";
import {DocumentReference} from "@angular/fire/compat/firestore";

interface Position {
  x: number;
  y: number;
}

export interface Annotations {
  id: string;
  description: string;
  image: string;
  position: Position
}
