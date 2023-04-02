import {DocumentInterface} from "./document.interface";
import {DocumentReference} from "@angular/fire/compat/firestore";

interface Position {
  x: number;
  y: number;
}

export interface Annotations {
  description: string;
  document: DocumentReference<DocumentInterface>
  image: string;
  position: Position
}
