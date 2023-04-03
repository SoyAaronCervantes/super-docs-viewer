import {DocumentInterface} from "./document.interface";
import {DocumentReference} from "@angular/fire/compat/firestore";

interface Position {
  x: number;
  y: number;
}

export interface Annotations {
  id?: string;
  title: string;
  position: Position
  description?: string | null;
  image?: string | null;
}

export type NewAnnotation = Omit<Annotations, 'id'>;
