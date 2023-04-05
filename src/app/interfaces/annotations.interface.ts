import {Point} from "@angular/cdk/drag-drop";

export interface Annotation {
  id: string | null;
  title: string;
  position: Point;
  description: string | null;
  image: string | null;
}

export type NewAnnotation = Omit<Annotation, 'id'>;
